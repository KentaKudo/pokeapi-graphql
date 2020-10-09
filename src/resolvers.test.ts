jest.mock("node-fetch");

import fetch from "node-fetch";
const { Response } = jest.requireActual("node-fetch");

import { mocked } from "ts-jest/utils";

import { berry, berries } from "./resolvers";

afterEach(() => mocked(fetch).mockReset());

test("berry calls fetch with the right args and returns the berry", async () => {
  const mockResponse = { id: 1, name: "cheri" };
  mocked(fetch).mockReturnValue(
    Promise.resolve(new Response(JSON.stringify(mockResponse)))
  );

  const id = 1;

  const b = await berry({ id });

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/berry/${id}`);
  expect(b).toStrictEqual(mockResponse);
});

test("berries", async () => {
  const mockResponse = {
    count: 64,
    next: "https://pokeapi.co/api/v2/berry?offset=6&limit=3",
    previous: "https://pokeapi.co/api/v2/berry?offset=0&limit=3",
    results: [
      { name: "rawst", url: "https://pokeapi.co/api/v2/berry/4/" },
      { name: "aspear", url: "https://pokeapi.co/api/v2/berry/5/" },
      { name: "leppa", url: "https://pokeapi.co/api/v2/berry/6/" },
    ],
  };

  const mockRawst = {
    id: 4,
    name: "rawst",
  };

  const mockAspear = {
    id: 5,
    name: "aspear",
  };

  const mockLeppa = {
    id: 6,
    name: "leppa",
  };

  mocked(fetch)
    .mockReturnValueOnce(
      Promise.resolve(new Response(JSON.stringify(mockResponse)))
    )
    .mockReturnValueOnce(
      Promise.resolve(new Response(JSON.stringify(mockRawst)))
    )
    .mockReturnValueOnce(
      Promise.resolve(new Response(JSON.stringify(mockAspear)))
    )
    .mockReturnValueOnce(
      Promise.resolve(new Response(JSON.stringify(mockLeppa)))
    );

  const first = 3;
  const after = Buffer.from("3").toString("base64");
  const bs = await berries({ first, after });

  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenNthCalledWith(
    1,
    `https://pokeapi.co/api/v2/berry?limit=3&offset=3`
  );
  expect(fetch).toHaveBeenNthCalledWith(
    2,
    `https://pokeapi.co/api/v2/berry/4/`
  );
  expect(fetch).toHaveBeenNthCalledWith(
    3,
    `https://pokeapi.co/api/v2/berry/5/`
  );
  expect(fetch).toHaveBeenNthCalledWith(
    4,
    `https://pokeapi.co/api/v2/berry/6/`
  );

  expect(bs).toStrictEqual({
    edges: [
      {
        node: mockRawst,
        cursor: Buffer.from("4").toString("base64"),
      },
      {
        node: mockAspear,
        cursor: Buffer.from("5").toString("base64"),
      },
      {
        node: mockLeppa,
        cursor: Buffer.from("6").toString("base64"),
      },
    ],
    nodes: [mockRawst, mockAspear, mockLeppa],
    pageInfo: {
      hasPreviousPage: true,
      hasNextPage: true,
      startCursor: Buffer.from("4").toString("base64"),
      endCursor: Buffer.from("6").toString("base64"),
    },
    totalCount: 64,
  });
});
