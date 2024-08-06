import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NounBorrowed from "./NounBorrowed.gif";
import NounSupplied from "./NounSupplied.gif";
import { Action, Token, RestorativeAction, tokens } from "../../commonTypes";
import { Icon } from "./icons";
import { FunkyFontWrapper } from "./funkyFontWrapper";
import { cn } from "../../lib/utils";
import { useContext, useMemo } from "react";
import { BalanceContext } from "./balanceProvider";
import { MiniTable } from "./miniTable";
import { Button } from "./button";
import SizedConfetti from "react-confetti";
const srcByAction = {
  Supply: NounSupplied,
  Borrow: NounBorrowed,
  Repay: NounSupplied,
  Withdraw: NounBorrowed,
};
const verbByAction = {
  Supply: "supplied",
  Borrow: "borrowed",
};
const verb2ByAction = {
  Supply: "earning",
  Borrow: "paying",
};
export const SuccessDialog = ({
  action,
  coin,
  amount,
  onOpenChange,
}: {
  action: Action;
  coin: Token;
  amount: number;
  onOpenChange?(open: boolean): void;
}) => {
  const TokenIcon = Icon[coin];
  const { balance } = useContext(BalanceContext);

  const infoRows = useMemo(
    () => [
      action === "Supply"
        ? {
            title: "SUPPLY APY",
            value: `${tokens[coin].tempHardcoded.supplyAPY}%`,
          }
        : {
            title: "BORROW APY",
            value: `${tokens[coin].tempHardcoded.borrowAPY}%`,
          },
      action === "Supply"
        ? {
            title: "SUPPLY BALANCE",
            value: balance
              ? balance[coin].liquidityBalance.toLocaleString() + ` ${coin}`
              : "-",
          }
        : {
            title: "BORROW BALANCE",
            value: balance
              ? balance[coin].borrowBalance.toLocaleString() + ` ${coin}`
              : "-",
          },
      {
        title: "COLLATERAL FACTOR",
        value: "70.0%",
      },
    ],
    [action, coin, balance],
  );
  return (
    <Dialog open onOpenChange={onOpenChange}>
      <SizedConfetti
        style={{ pointerEvents: "none", zIndex: 1000 }}
        numberOfPieces={750}
        recycle={false}
      />
      <DialogContent
        lightOverlay
        className="max-w-[704px] w-full flex flex-col gap-6 items-center"
      >
        <Image src={srcByAction[action]} alt="Success Illustration" />
        <FunkyFontWrapper className="flex flex-col sm:flex-row items-center text-[44px] gap-2">
          <span className="text-opacity-40">Congrats! You just</span>
          <span className="flex flex-row items-center gap-2">
            {verbByAction[action]}
            <TokenIcon />
            <span>
              {amount} {coin}
            </span>
          </span>
        </FunkyFontWrapper>
        <div className="mb-5">
          You are {verb2ByAction[action]}{" "}
          <span
            className={cn(
              "text-base",
              action === "Borrow" ? "text-yellow-500" : "text-green-500",
            )}
          >
            {amount * 0.001 /* FIXME: unmock */}
          </span>{" "}
          {coin} per day with this position
        </div>
        <div className="max-w-[362px] w-full flex flex-col">
          <MiniTable rounded infoRows={infoRows} />
          <Button className="mt-5" onClick={() => onOpenChange?.(false)}>
            Go Back
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
