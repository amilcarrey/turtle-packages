import type { Config } from "@/config";
import { z } from "zod";
export interface EarnDealsOptions {
    campaignId?: string;
    idFilter?: string;
    protocolFilter?: string;
}
declare const earnDealsSchema: z.ZodObject<{
    deals: z.ZodArray<z.ZodObject<{
        protocol: z.ZodString;
        token: z.ZodObject<{
            address: z.ZodString;
            name: z.ZodString;
            symbol: z.ZodString;
            logos: z.ZodArray<z.ZodString, "many">;
            decimals: z.ZodNumber;
            chain: z.ZodNumber;
            price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }, {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }>;
        underlying_tokens: z.ZodArray<z.ZodObject<{
            address: z.ZodString;
            name: z.ZodString;
            symbol: z.ZodString;
            logos: z.ZodArray<z.ZodString, "many">;
            decimals: z.ZodNumber;
            chain: z.ZodNumber;
            price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }, {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }>, "many">;
        metadata: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            iconUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        }, {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        }>;
        data: z.ZodObject<{
            apy: z.ZodNumber;
            apy_base: z.ZodNumber;
            apy_reward: z.ZodNumber;
            tvl: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        }, {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        data: {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        };
        protocol: string;
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        underlying_tokens: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }[];
        metadata: {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        };
    }, {
        data: {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        };
        protocol: string;
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        underlying_tokens: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }[];
        metadata: {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        };
    }>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodObject<{
        totalTvl: z.ZodNumber;
        chains: z.ZodArray<z.ZodNumber, "many">;
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        iconUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        totalTvl: number;
        chains: number[];
    }, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        totalTvl: number;
        chains: number[];
    }>>;
}, "strip", z.ZodTypeAny, {
    metadata: Record<string, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        totalTvl: number;
        chains: number[];
    }>;
    deals: {
        data: {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        };
        protocol: string;
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        underlying_tokens: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }[];
        metadata: {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        };
    }[];
}, {
    metadata: Record<string, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        totalTvl: number;
        chains: number[];
    }>;
    deals: {
        data: {
            apy: number;
            apy_base: number;
            apy_reward: number;
            tvl: number;
        };
        protocol: string;
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        underlying_tokens: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        }[];
        metadata: {
            name: string;
            id: string;
            description: string;
            iconUrl: string;
        };
    }[];
}>;
export type EarnDealsResponse = z.infer<typeof earnDealsSchema>;
export declare function earnDeals(options: EarnDealsOptions, config: Config): Promise<EarnDealsResponse>;
export {};
