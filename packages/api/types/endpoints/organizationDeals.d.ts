import type { Config } from "../config";
import { z } from "zod";
export interface OrganizationDealsOptions {
    organizationId: string;
}
export declare const organizationDealSchema: z.ZodObject<{
    id: z.ZodString;
    organizationId: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    iconUrl: z.ZodString;
    dealUrl: z.ZodString;
    dealType: z.ZodString;
    status: z.ZodString;
    boostConfig: z.ZodOptional<z.ZodObject<{
        pointsProjectId: z.ZodOptional<z.ZodString>;
        pointsDetailId: z.ZodOptional<z.ZodString>;
        pointsSeasonId: z.ZodOptional<z.ZodString>;
        incentiveType: z.ZodString;
        incentiveName: z.ZodString;
        turtleBoostPct: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        incentiveType: string;
        incentiveName: string;
        turtleBoostPct: number;
        pointsProjectId?: string | undefined;
        pointsDetailId?: string | undefined;
        pointsSeasonId?: string | undefined;
    }, {
        incentiveType: string;
        incentiveName: string;
        turtleBoostPct: number;
        pointsProjectId?: string | undefined;
        pointsDetailId?: string | undefined;
        pointsSeasonId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: string;
    name: string;
    id: string;
    description: string;
    iconUrl: string;
    organizationId: string;
    dealUrl: string;
    dealType: string;
    boostConfig?: {
        incentiveType: string;
        incentiveName: string;
        turtleBoostPct: number;
        pointsProjectId?: string | undefined;
        pointsDetailId?: string | undefined;
        pointsSeasonId?: string | undefined;
    } | undefined;
}, {
    status: string;
    name: string;
    id: string;
    description: string;
    iconUrl: string;
    organizationId: string;
    dealUrl: string;
    dealType: string;
    boostConfig?: {
        incentiveType: string;
        incentiveName: string;
        turtleBoostPct: number;
        pointsProjectId?: string | undefined;
        pointsDetailId?: string | undefined;
        pointsSeasonId?: string | undefined;
    } | undefined;
}>;
declare const organizationDealsSchema: z.ZodObject<{
    organization: z.ZodObject<{
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
    }>;
    deals: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        iconUrl: z.ZodString;
        dealUrl: z.ZodString;
        dealType: z.ZodString;
        status: z.ZodString;
        boostConfig: z.ZodOptional<z.ZodObject<{
            pointsProjectId: z.ZodOptional<z.ZodString>;
            pointsDetailId: z.ZodOptional<z.ZodString>;
            pointsSeasonId: z.ZodOptional<z.ZodString>;
            incentiveType: z.ZodString;
            incentiveName: z.ZodString;
            turtleBoostPct: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        }, {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        status: string;
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        organizationId: string;
        dealUrl: string;
        dealType: string;
        boostConfig?: {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        } | undefined;
    }, {
        status: string;
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        organizationId: string;
        dealUrl: string;
        dealType: string;
        boostConfig?: {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    deals: {
        status: string;
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        organizationId: string;
        dealUrl: string;
        dealType: string;
        boostConfig?: {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        } | undefined;
    }[];
    organization: {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    };
}, {
    deals: {
        status: string;
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        organizationId: string;
        dealUrl: string;
        dealType: string;
        boostConfig?: {
            incentiveType: string;
            incentiveName: string;
            turtleBoostPct: number;
            pointsProjectId?: string | undefined;
            pointsDetailId?: string | undefined;
            pointsSeasonId?: string | undefined;
        } | undefined;
    }[];
    organization: {
        name: string;
        id: string;
        description: string;
        iconUrl: string;
        landingUrl: string;
        organizationType: string;
    };
}>;
export type OrganizationDealsResponse = z.infer<typeof organizationDealsSchema>;
export declare function organizationDeals(options: OrganizationDealsOptions, config: Config): Promise<OrganizationDealsResponse>;
export {};
