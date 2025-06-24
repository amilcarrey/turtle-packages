import type { Config } from "../config";
import { z } from "zod";
export interface ProjectTvlOptions {
    projects: string[];
}
declare const projectTvlSchema: z.ZodObject<{
    projects: z.ZodRecord<z.ZodString, z.ZodObject<{
        tvl_usd: z.ZodNumber;
        asset_tvl_usd: z.ZodNumber;
        debt_tvl_usd: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tvl_usd: number;
        asset_tvl_usd: number;
        debt_tvl_usd: number;
    }, {
        tvl_usd: number;
        asset_tvl_usd: number;
        debt_tvl_usd: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    projects: Record<string, {
        tvl_usd: number;
        asset_tvl_usd: number;
        debt_tvl_usd: number;
    }>;
}, {
    projects: Record<string, {
        tvl_usd: number;
        asset_tvl_usd: number;
        debt_tvl_usd: number;
    }>;
}>;
export type ProjectTvlResponse = z.infer<typeof projectTvlSchema>;
export declare function projectTvl({ projects }: ProjectTvlOptions, config: Config): Promise<ProjectTvlResponse>;
export {};
