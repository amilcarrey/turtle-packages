import type { Config } from "../config";
export interface ExistsOptions {
    user: string;
}
export declare function exists({ user }: ExistsOptions, config: Config): Promise<boolean>;
