import { z } from "zod";
export declare const swapSubstep: z.ZodObject<{
    kind: z.ZodLiteral<"swap">;
    from: z.ZodArray<z.ZodObject<{
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
    to: z.ZodArray<z.ZodObject<{
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
    protocol: z.ZodString;
    protocol_asset: z.ZodNullable<z.ZodObject<{
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
    }>>;
    price_impact: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "swap";
    protocol: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
}, {
    kind: "swap";
    protocol: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
}>;
export type SwapSubstep = z.infer<typeof swapSubstep>;
export declare const depositSubstep: z.ZodObject<{
    kind: z.ZodLiteral<"deposit">;
    vault: z.ZodString;
    from: z.ZodArray<z.ZodObject<{
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
    to: z.ZodArray<z.ZodObject<{
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
    amount: z.ZodString;
    protocol: z.ZodString;
    protocol_asset: z.ZodNullable<z.ZodObject<{
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
    }>>;
    price_impact: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "deposit";
    protocol: string;
    amount: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
    vault: string;
}, {
    kind: "deposit";
    protocol: string;
    amount: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
    vault: string;
}>;
export type DepositSubstep = z.infer<typeof depositSubstep>;
export declare const routerSubstep: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"swap">;
    from: z.ZodArray<z.ZodObject<{
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
    to: z.ZodArray<z.ZodObject<{
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
    protocol: z.ZodString;
    protocol_asset: z.ZodNullable<z.ZodObject<{
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
    }>>;
    price_impact: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "swap";
    protocol: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
}, {
    kind: "swap";
    protocol: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"deposit">;
    vault: z.ZodString;
    from: z.ZodArray<z.ZodObject<{
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
    to: z.ZodArray<z.ZodObject<{
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
    amount: z.ZodString;
    protocol: z.ZodString;
    protocol_asset: z.ZodNullable<z.ZodObject<{
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
    }>>;
    price_impact: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "deposit";
    protocol: string;
    amount: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
    vault: string;
}, {
    kind: "deposit";
    protocol: string;
    amount: string;
    from: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    to: {
        symbol: string;
        address: string;
        name: string;
        decimals: number;
        logos: string[];
        chain: number;
        price?: number | null | undefined;
    }[];
    protocol_asset: {
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
    } | null;
    price_impact: number | null;
    vault: string;
}>]>;
export type RouterSubstep = z.infer<typeof routerSubstep>;
