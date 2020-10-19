import { connection, ConnectionFn, node } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Language {
  id: number;
}

export const languages: ConnectionFn<Language> = connection(ENDPOINTS.LANGUAGE);
export const language = node(ENDPOINTS.LANGUAGE);
