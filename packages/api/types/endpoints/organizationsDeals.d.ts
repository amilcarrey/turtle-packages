import type { Config } from "../config";
import { z } from "zod";
export interface OrganizationsDealsOptions {
    organizationIds: string[];
}
declare const organizationsDealsSchema: z.ZodObject<{
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
}>;
export type OrganizationsDealsResponse = z.infer<typeof organizationsDealsSchema>;
export declare function organizationsDeals(options: OrganizationsDealsOptions, config: Config): Promise<OrganizationsDealsResponse>;
export {};
