import type { JSX } from "react";
import { useEffect, useState } from "react";
import { useTokenDeposit } from "../../hooks/useTokenDeposit";
import type { EarnWidgetProps, EarnRouteStep } from "../../types";
import { Button } from "../ui/button";

interface ConfirmButtonProps {
  userAddress?: string;
  openConnectionModal: EarnWidgetProps['openConnectionModal'];
  sendTransaction: EarnWidgetProps['sendTransaction'];
  signMessage: EarnWidgetProps['signMessage'];
  changeNetwork: EarnWidgetProps['changeNetwork'];
  onError?: EarnWidgetProps['onError'];
  onSuccess?: EarnWidgetProps['onSuccess'];
  className?: string;
}

export function ConfirmButton({ 
  userAddress,
  openConnectionModal,
  sendTransaction,
  signMessage: _signMessage,
  changeNetwork: _changeNetwork,
  onError,
  onSuccess,
  className 
}: ConfirmButtonProps): JSX.Element {
  const { fetchedRoute, routeError, isLoadingRoute } = useTokenDeposit(userAddress);
  const [executingSteps, setExecutingSteps] = useState<Set<string>>(new Set());
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('ConfirmButton - fetchedRoute:', fetchedRoute);
      console.log('ConfirmButton - routeError:', routeError);
    }
  }, [fetchedRoute, routeError]);

  const handleConfirm = async (step: EarnRouteStep): Promise<void> => {
    if (!fetchedRoute || !userAddress) return;

    setExecutingSteps(prev => new Set([...prev, step.id]));

    try {
      const hash = await sendTransaction({
        from: userAddress as any,
        to: step.to as any,
        data: step.data as any,
        value: step.value ? BigInt(step.value) : undefined,
        chainId: 1, // TODO: Get from widget config
      });

      console.log(`Step ${step.id} completed with hash:`, hash);
      
      setCompletedSteps(prev => new Set([...prev, step.id]));
      
      // If this was the last step, call onSuccess
      if (completedSteps.size + 1 === fetchedRoute.steps.length) {
        onSuccess?.();
      }
    } catch (error) {
      console.error(`Step ${step.id} failed:`, error);
      onError?.(error as Error);
    } finally {
      setExecutingSteps(prev => {
        const newSet = new Set(prev);
        newSet.delete(step.id);
        return newSet;
      });
    }
  };

  // Connect wallet button
  if (!userAddress) {
    return (
      <Button 
        onClick={openConnectionModal} 
        className={className}
        size="lg"
      >
        Connect Wallet
      </Button>
    );
  }

  // Loading state
  if (isLoadingRoute) {
    return (
      <Button 
        disabled 
        className={className}
        size="lg"
      >
        Loading route...
      </Button>
    );
  }

  // Error state
  if (routeError) {
    return (
      <Button 
        disabled 
        variant="secondary"
        className={className}
        size="lg"
      >
        Route Error
      </Button>
    );
  }

  // No route available
  if (!fetchedRoute || !fetchedRoute.steps || fetchedRoute.steps.length === 0) {
    return (
      <Button 
        disabled 
        variant="outline"
        className={className}
        size="lg"
      >
        Enter amount to continue
      </Button>
    );
  }

  // Render step buttons
  return (
    <div className={`space-y-2 ${className || ''}`}>
      {fetchedRoute.steps.map((step, index) => {
        const isExecuting = executingSteps.has(step.id);
        const isCompleted = completedSteps.has(step.id);
        const isDisabled = isExecuting || (index > 0 && !completedSteps.has(fetchedRoute.steps[index - 1].id));

        return (
          <Button
            key={step.id}
            onClick={() => handleConfirm(step)}
            disabled={isDisabled}
            variant={isCompleted ? "secondary" : "default"}
            size="lg"
            className="w-full"
          >
            {isExecuting && "Executing..."}
            {isCompleted && "✓ "}
            {!isExecuting && !isCompleted && `${step.title}`}
            {fetchedRoute.steps.length > 1 && ` (Step ${index + 1})`}
          </Button>
        );
      })}
      
      {/* Summary info */}
      {fetchedRoute.estimatedTime && (
        <div className="text-sm text-turtle-text/70 text-center mt-2">
          Estimated time: {Math.ceil(fetchedRoute.estimatedTime / 60)} min
        </div>
      )}
    </div>
  );
}