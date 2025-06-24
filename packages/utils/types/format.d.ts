export declare function removeZeros(val: string | number): string;
export declare function numberScale(val: string | number, decimals: number): [number, string];
export declare function formatNumber(val: string | number, decimals?: number, doScale?: boolean, zeros?: boolean): string;
export declare function formatToken(amount: string, token: {
    decimals: number;
}, doScale?: boolean, zeros?: boolean, decimals?: number): string;
export declare function formatAddress(address: string): string;
