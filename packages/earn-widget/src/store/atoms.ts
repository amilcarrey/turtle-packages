import { atom } from 'jotai';
import type { WidgetStyleConfig } from '../types/style-config';
import type { DealFormatted, Token, DepositDetails } from '../types/deals';
import { defaultWidgetStyleConfig } from './widget-style-config';

// Widget style configuration atom
export const widgetStyleConfigAtom = atom<WidgetStyleConfig>(defaultWidgetStyleConfig);

// UI state atoms
export const showPanelAtom = atom<boolean>(false);
export const widgetLoadingAtom = atom<boolean>(false);
export const widgetErrorAtom = atom<Error | null>(null);

// Distributor ID atom
export const distributorIdAtom = atom<string>("TURTLE");

// Deal and token selection atoms
export const dealSelectedAtom = atom<DealFormatted | null>(null);
export const selectedTokenAtom = atom<Token | null>(null);
export const selectedChainAtom = atom<string>("");

// Deposit details atom
export const depositDetailsAtom = atom<DepositDetails>({
  amount: "",
  tokenAddress: "",
  tokenDecimals: 0,
  chain: "",
});