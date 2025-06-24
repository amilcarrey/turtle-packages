import type { Config } from "../config";
import { z } from "zod";
declare const organizationSchema: z.ZodObject<{
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        landingUrl: z.ZodString;
        iconUrl: z.ZodString;
        organizationType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    }, {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    organizations: {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    }[];
}, {
    organizations: {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    }[];
}>;
export type OrganizationResponse = z.infer<typeof organizationSchema>;
export declare function organization(config: Config): Promise<OrganizationResponse>;
export {};
