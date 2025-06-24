import { z } from "zod";
export declare const stepTx: z.ZodObject<{
    from: z.ZodString;
    to: z.ZodString;
    data: z.ZodString;
    value: z.ZodString;
    gas: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: string;
    value: string;
    from: string;
    to: string;
    gas: number;
}, {
    data: string;
    value: string;
    from: string;
    to: string;
    gas: number;
}>;
export type StepTx = z.infer<typeof stepTx>;
export declare const approveStep: z.ZodObject<{
    kind: z.ZodLiteral<"approve">;
    owner: z.ZodString;
    spender: z.ZodString;
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
    tx: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        data: z.ZodString;
        value: z.ZodString;
        gas: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "approve";
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
    owner: string;
    spender: string;
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
}, {
    kind: "approve";
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
    owner: string;
    spender: string;
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
}>;
export type ApproveStep = z.infer<typeof approveStep>;
export declare const ensoStep: z.ZodObject<{
    kind: z.ZodLiteral<"enso">;
    substeps: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    }>]>, "many">;
    tx: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        data: z.ZodString;
        value: z.ZodString;
        gas: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }>;
    asset: z.ZodNullable<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    kind: "enso";
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
    substeps: ({
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
    } | {
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
    })[];
    asset: {
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
}, {
    kind: "enso";
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
    substeps: ({
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
    } | {
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
    })[];
    asset: {
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
}>;
export type EnsoStep = z.infer<typeof ensoStep>;
export declare const routerStep: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"approve">;
    owner: z.ZodString;
    spender: z.ZodString;
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
    tx: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        data: z.ZodString;
        value: z.ZodString;
        gas: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "approve";
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
    owner: string;
    spender: string;
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
}, {
    kind: "approve";
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
    owner: string;
    spender: string;
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
}>, z.ZodObject<{
    kind: z.ZodLiteral<"enso">;
    substeps: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    }>]>, "many">;
    tx: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        data: z.ZodString;
        value: z.ZodString;
        gas: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }, {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    }>;
    asset: z.ZodNullable<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    kind: "enso";
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
    substeps: ({
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
    } | {
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
    })[];
    asset: {
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
}, {
    kind: "enso";
    tx: {
        data: string;
        value: string;
        from: string;
        to: string;
        gas: number;
    };
    substeps: ({
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
    } | {
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
    })[];
    asset: {
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
}>]>;
export type RouterStep = z.infer<typeof routerStep>;
