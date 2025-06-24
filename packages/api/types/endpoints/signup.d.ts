import type { Config } from "../config";
export interface SignupOptions {
    signupToken: string;
    user: string;
    signature: string;
    referral?: string;
    network?: string;
}
export declare function signup(options: SignupOptions, config: Config): Promise<boolean>;
