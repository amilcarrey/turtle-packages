import type { Address, Hex } from "viem";

export type Network = number;

export interface Transaction<TNetwork extends number = Network> {
  from: Address;
  to: Address;
  data: Hex;
  chainId: TNetwork;
  value?: bigint;
}

export interface Adapter<TNetwork extends number = Network> {
  user: Address | undefined;
  network: TNetwork;
  openConnectionModal: () => void;
  sendTransaction: (transaction: Transaction<TNetwork>) => Promise<string>;
  signMessage: (message: string) => Promise<string>;
  changeNetwork: (network: TNetwork) => Promise<void>;
}
