import { ChangeEventHandler } from "react";
import { Button } from "./button";
import { CoinSelect } from "./coinSelect";
import { FunkyFontWrapper } from "./funkyFontWrapper";
import { Input } from "./input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Action, Token, RestorativeAction } from "../../commonTypes";
import { MiniTable } from "./miniTable";

const isRestorativeAction = (
  action: Action | RestorativeAction,
): action is RestorativeAction => action === "Repay" || action === "Withdraw";

const actionTexts = {
  Supply: "Supply",
  Borrow: "Borrow",
  Withdraw: "Withdraw",
  Repay: "Repay",
};

export const CardContent = ({
  amount,
  onAmountChange,
  coin,
  onCoinChange,
  onSubmit,
  infoRows,
  totalAmount,
  action,
}: {
  amount: string;
  totalAmount?: string;
  onAmountChange: (val: string) => void;
  coin: Token;
  onCoinChange?: (val: Token) => void;
  onSubmit: () => void;
  infoRows?: { title: string; value: string }[];
  action: Action | RestorativeAction;
}) => {
  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (!value || /^\d+(\.\d*)?$/.test(value)) {
      onAmountChange(value);
    }
  };
  const isValidAmount = !!amount;
  const isRestorative = isRestorativeAction(action);
  return (
    <>
      <FunkyFontWrapper className="text-2xl py-4">
        You {actionTexts[action]?.toLocaleLowerCase()}{" "}
        {isRestorative
          ? `(${totalAmount ? `out of ${totalAmount} ${coin}` : coin})`
          : ""}
      </FunkyFontWrapper>
      <div className="flex flex-row gap-3 mb-4">
        {onCoinChange && <CoinSelect onChange={onCoinChange} value={coin} />}
        <Input
          placeholder="E.g.: 0.1"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <Tooltip delayDuration={200} disableHoverableContent>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            className="w-full"
            onClick={onSubmit}
            disabled={!isValidAmount}
          >
            {actionTexts[action]} {coin}
          </Button>
        </TooltipTrigger>
        {!isValidAmount && (
          <TooltipContent side="bottom">
            <FunkyFontWrapper>Please, provide amount</FunkyFontWrapper>
          </TooltipContent>
        )}
      </Tooltip>
      {!isRestorative && !!infoRows?.length && (
        <MiniTable rounded infoRows={infoRows} />
      )}
    </>
  );
};
