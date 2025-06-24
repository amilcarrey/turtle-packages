import type { Config } from "./config";
import { z, type ZodType } from "zod";
import { doRawFetch } from "./fetch";
export declare function signed<Z extends ZodType>(schema: Z): z.ZodObject<{
    data: Z;
    exp: z.ZodNumber;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    data: Z;
    exp: z.ZodNumber;
}>, any> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    data: Z;
    exp: z.ZodNumber;
}>, any>[k]; } : never, z.baseObjectInputType<{
    data: Z;
    exp: z.ZodNumber;
}> extends infer T_1 ? { [k_1 in keyof T_1]: z.baseObjectInputType<{
    data: Z;
    exp: z.ZodNumber;
}>[k_1]; } : never>;
export declare function fetchSigned<Z extends ZodType>(config: Config, schema: Z, options: Parameters<typeof doRawFetch>[1]): Promise<z.infer<Z>>;
