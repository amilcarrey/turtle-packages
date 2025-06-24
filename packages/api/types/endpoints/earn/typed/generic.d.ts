import { z } from "zod";
export declare const assetImageData: z.ZodObject<{
    kind: z.ZodLiteral<"image">;
    url: z.ZodString;
    alt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "image";
    url: string;
    alt: string;
}, {
    kind: "image";
    url: string;
    alt: string;
}>;
export type AssetImageData = z.infer<typeof assetImageData>;
export declare const assetERC20Data: z.ZodObject<{
    kind: z.ZodLiteral<"erc20">;
    address: z.ZodString;
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    kind: "erc20";
    address: string;
    name: string;
    decimals: number;
}, {
    symbol: string;
    kind: "erc20";
    address: string;
    name: string;
    decimals: number;
}>;
export type AssetERC20Data = z.infer<typeof assetERC20Data>;
export declare const assetData: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"image">;
    url: z.ZodString;
    alt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "image";
    url: string;
    alt: string;
}, {
    kind: "image";
    url: string;
    alt: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"erc20">;
    address: z.ZodString;
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    kind: "erc20";
    address: string;
    name: string;
    decimals: number;
}, {
    symbol: string;
    kind: "erc20";
    address: string;
    name: string;
    decimals: number;
}>]>;
export type AssetData = z.infer<typeof assetData>;
export declare const asset: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slugs: z.ZodArray<z.ZodString, "many">;
    tags: z.ZodArray<z.ZodString, "many">;
    description: z.ZodNullable<z.ZodString>;
    data: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "image";
        url: string;
        alt: string;
    }, {
        kind: "image";
        url: string;
        alt: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"erc20">;
        address: z.ZodString;
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        kind: "erc20";
        address: string;
        name: string;
        decimals: number;
    }, {
        symbol: string;
        kind: "erc20";
        address: string;
        name: string;
        decimals: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    data: ({
        kind: "image";
        url: string;
        alt: string;
    } | {
        symbol: string;
        kind: "erc20";
        address: string;
        name: string;
        decimals: number;
    })[];
    name: string;
    id: string;
    slugs: string[];
    tags: string[];
    description: string | null;
}, {
    data: ({
        kind: "image";
        url: string;
        alt: string;
    } | {
        symbol: string;
        kind: "erc20";
        address: string;
        name: string;
        decimals: number;
    })[];
    name: string;
    id: string;
    slugs: string[];
    tags: string[];
    description: string | null;
}>;
export declare function getAssetImage(asset: Asset): AssetImageData | null;
export type Asset = z.infer<typeof asset>;
export declare const defiData: z.ZodObject<{
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
export type DefiData = z.infer<typeof defiData>;
export declare const token: z.ZodObject<{
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
export type Token = z.infer<typeof token>;
export declare const defiMetadata: z.ZodObject<{
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
export declare const defiToken: z.ZodObject<{
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
}>;
export type DefiToken = z.infer<typeof defiToken>;
export declare const walletBalance: z.ZodObject<{
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
}>;
export type WalletBalance = z.infer<typeof walletBalance>;
