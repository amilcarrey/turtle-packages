import type { z, ZodType } from "zod";
import type { Config } from "./config";
export interface FetchOptions {
    path: string;
    body?: unknown;
    isJson?: boolean;
    type?: FetchType;
}
export type FetchType = "points" | "indexer" | "earn";
export declare function doRawFetch(config: Config, { path, body, type, }: FetchOptions): Promise<{
    data: string;
    response: Response;
}>;
export declare function doFetch<Z extends ZodType>(config: Config, schema: Z, options: FetchOptions): Promise<z.infer<Z>>;
export declare function buildQueryString(options: Record<string, string | number | boolean | undefined>): string;
