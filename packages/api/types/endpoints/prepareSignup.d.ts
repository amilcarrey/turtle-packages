import type { Config } from "../config";
import { z } from "zod";
export interface PrepareSignupOptions {
    user: string;
}
declare const prepareSignupSchema: z.ZodObject<{
    signup_token: z.ZodString;
    nonce: z.ZodString;
    timestamp: z.ZodString;
    sign_message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signup_token: string;
    nonce: string;
    timestamp: string;
    sign_message: string;
}, {
    signup_token: string;
    nonce: string;
    timestamp: string;
    sign_message: string;
}>;
export type PrepareSignupResponse = z.infer<typeof prepareSignupSchema>;
export declare function prepareSignup(options: PrepareSignupOptions, config: Config): Promise<PrepareSignupResponse>;
export {};
