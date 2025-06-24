import type { Config } from "@/config";
import { z } from "zod";
export interface EarnWalletBalancesOptions {
    user: string;
    chain: number;
}
declare const earnWalletBalancesSchema: z.ZodObject<{
    balances: z.ZodArray<z.ZodObject<{
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
        amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        amount: string;
    }, {
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        amount: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    balances: {
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        amount: string;
    }[];
}, {
    balances: {
        token: {
            symbol: string;
            address: string;
            name: string;
            decimals: number;
            logos: string[];
            chain: number;
            price?: number | null | undefined;
        };
        amount: string;
    }[];
}>;
export type EarnWalletBalancesResponse = z.infer<typeof earnWalletBalancesSchema>;
export declare function earnWalletBalances(options: EarnWalletBalancesOptions, config: Config): Promise<EarnWalletBalancesResponse>;
export {};
