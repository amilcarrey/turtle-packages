import type { JSX } from "react";
import { useAtom } from "jotai";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import type { EarnWalletBalancesResponse, WalletBalance } from "../../hooks/useEarnWalletBalances";
import { useEarnWalletBalances } from "../../hooks/useEarnWalletBalances";
import { depositDetailsAtom, selectedTokenAtom } from "../../store/atoms";
import { AssetIcon } from "../ui/asset-icon";
import { Button } from "../ui/button";
import { WidgetContainer } from "../ui/widget-container";

// Popover simple implementado con estado local
function TokenPopover({ 
  isOpen, 
  onOpenChange, 
  trigger, 
  children 
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div onClick={() => onOpenChange(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => onOpenChange(false)}
          />
          <div className="absolute top-full right-0 z-20 mt-2 w-80 bg-turtle-background border border-turtle-border rounded-lg shadow-lg p-2">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

function TokenSelector({ 
  balances, 
  userAddress 
}: { 
  balances: EarnWalletBalancesResponse | null;
  userAddress?: string;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom);

  // Auto-select first token when balances load
  useEffect(() => {
    if (!selectedToken && balances?.balances && balances.balances.length > 0) {
      const firstBalance = balances.balances[0];
      setSelectedToken({
        address: firstBalance.token.address,
        name: firstBalance.token.name,
        symbol: firstBalance.token.symbol,
        decimals: firstBalance.token.decimals,
        logo: firstBalance.token.logos?.[0],
        balance: firstBalance.amount,
        price: firstBalance.token.price,
      });
    }
  }, [balances, selectedToken, setSelectedToken]);

  if (!userAddress) {
    return (
      <div className="rounded-full bg-turtle-secondary/10 px-4 py-2 text-turtle-text/50">
        Connect wallet
      </div>
    );
  }

  if (!balances || !balances.balances || balances.balances.length === 0) {
    return (
      <div className="rounded-full bg-turtle-secondary/10 px-4 py-2 text-turtle-text/50">
        No tokens
      </div>
    );
  }

  const handleSelectToken = (balance: WalletBalance): void => {
    setSelectedToken({
      address: balance.token.address,
      name: balance.token.name,
      symbol: balance.token.symbol,
      decimals: balance.token.decimals,
      logo: balance.token.logos?.[0],
      balance: balance.amount,
      price: balance.token.price,
    });
    setOpen(false);
  };

  const currentToken = selectedToken || {
    symbol: balances.balances[0].token.symbol,
    logo: balances.balances[0].token.logos?.[0],
  };

  return (
    <TokenPopover isOpen={open} onOpenChange={setOpen} trigger={
      <button className="flex items-center gap-2 rounded-full bg-turtle-secondary/10 hover:bg-turtle-secondary/20 pl-1 pr-3 py-1 transition-colors">
        <AssetIcon
          url={currentToken.logo}
          alt={currentToken.symbol}
          size="sm"
        />
        <span className="text-turtle-text font-medium">{currentToken.symbol}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-turtle-text" />
          : <ChevronDown className="w-4 h-4 text-turtle-text" />
        }
      </button>
    }>
      <div className="space-y-1">
        <h3 className="text-sm font-medium px-3 py-2 text-turtle-text/70">Select Token</h3>
        {balances.balances.map((balance) => {
          const isSelected = selectedToken?.address === balance.token.address;
          const formattedBalance = formatUnits(BigInt(balance.amount), balance.token.decimals);

          return (
            <button
              key={balance.token.address}
              onClick={() => handleSelectToken(balance)}
              className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg transition-colors ${
                isSelected
                  ? "bg-turtle-primary/10"
                  : "hover:bg-turtle-secondary/10"
              }`}
            >
              <AssetIcon
                url={balance.token.logos?.[0]}
                alt={balance.token.symbol}
                size="sm"
              />
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-turtle-text">{balance.token.symbol}</span>
                  <span className="text-sm text-turtle-text/70">{balance.token.name}</span>
                </div>
                <div className="text-sm text-turtle-text/50">
                  Balance: {parseFloat(formattedBalance).toFixed(4)}
                </div>
              </div>
              {isSelected && (
                <div className="w-2 h-2 rounded-full bg-turtle-primary" />
              )}
            </button>
          );
        })}
      </div>
    </TokenPopover>
  );
}

interface DepositProps {
  userAddress?: string;
}

export function Deposit({ userAddress }: DepositProps): JSX.Element {
  const { data: balances, isLoading } = useEarnWalletBalances(
    userAddress
      ? {
          chain: 1,
          user: userAddress,
        }
      : undefined,
  );
  
  const [selectedToken] = useAtom(selectedTokenAtom);
  const [amount, setAmount] = useState("");
  const [_depositDetails, setDepositDetails] = useAtom(depositDetailsAtom);

  // Reset amount when token changes
  useEffect(() => {
    setAmount("");
  }, [selectedToken]);

  // Update deposit details when amount or token changes
  useEffect(() => {
    setDepositDetails({
      amount,
      tokenAddress: selectedToken?.address ?? "",
      tokenDecimals: selectedToken?.decimals ?? 18,
      chain: "1",
    });
  }, [amount, selectedToken, setDepositDetails]);

  const handleMaxClick = (): void => {
    if (selectedToken) {
      const maxAmount = formatUnits(BigInt(selectedToken.balance), selectedToken.decimals);
      setAmount(maxAmount);
    }
  };

  const formattedBalance = selectedToken 
    ? parseFloat(formatUnits(BigInt(selectedToken.balance), selectedToken.decimals)).toFixed(6)
    : "0";

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-turtle-text">Deposit</h3>
      
      <WidgetContainer variant="card" border="default" padding="default">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              disabled={!userAddress || isLoading}
              className="w-full text-3xl text-turtle-text placeholder:text-turtle-text/40 bg-transparent outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] disabled:opacity-50"
            />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <TokenSelector balances={balances || null} userAddress={userAddress} />
            
            {selectedToken && (
              <div className="flex gap-2 items-center text-sm">
                <span className="text-turtle-text/70">
                  Balance: {formattedBalance}
                </span>
                <Button
                  onClick={handleMaxClick}
                  variant="secondary"
                  size="sm"
                  className="text-xs py-1 px-2 h-auto"
                  disabled={!selectedToken}
                >
                  Max
                </Button>
              </div>
            )}
          </div>
        </div>
      </WidgetContainer>
      
      {isLoading && (
        <div className="text-sm text-turtle-text/70 text-center">
          Loading balances...
        </div>
      )}
    </div>
  );
}