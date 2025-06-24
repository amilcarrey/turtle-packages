import * as rawChains from "viem/chains";
interface ChainlistItem {
    name: string;
    chain: string;
    rpc: string[];
    shortName: string;
    chainId: number;
    icon?: string;
    chainSlug?: string;
}
export declare const chains: Record<number, rawChains.Chain>;
export declare const chainlistItems: Record<number, ChainlistItem>;
export declare function getChainById(id: number): rawChains.Chain | undefined;
export declare function getChainByName(name: string): rawChains.Chain | undefined;
export declare function addressExplorer(address: string, chainId: number): string;
export declare function txExplorer(txHash: string, chainId: number): string;
export declare function txExplorerName(chainId: number): string;
export declare function chainName(chainId: number): string;
export declare function chainLogo(chainId: number): string;
export {};
