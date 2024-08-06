import { MouseEventHandler, useCallback } from "react";
import { Action, Token, Market } from "../../commonTypes";
import { Button } from "./button";
import { FirstColumn } from "./firstColumn";
import { VerticalDivider } from "./verticalDivider";
import Link from "next/link";

export const MarketTableRow = ({
  coin,
  name,
  poolUtilization,
  supplyAPY,
  borrowAPY,
  onAction,
}: Market & {
  onAction: (action: Action, coin: Token) => void;
}) => {
  const onSupplyCb: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      onAction("Supply", coin);
    },
    [coin, onAction],
  );
  const onBorrowCb: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      onAction("Borrow", coin);
    },
    [coin, onAction],
  );
  return (
    <Link href={`/market/${coin}`}>
      <div
        key={coin}
        className="flex flex-col sm:flex-row ring-1 ring-[#00000014] p-5 gap-2 sm:gap-0 bg-white"
      >
        <FirstColumn
          coin={coin}
          name={name}
          data={{
            label: "Pool Utilization",
            value: `${Math.round(poolUtilization)}%`,
          }}
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div className="text-xs opacity-40 font-semibold">Supply APY</div>
            <div className="text-sm font-semibold text-green-500">
              {supplyAPY.toFixed(2)}%
            </div>
          </div>
          <VerticalDivider className="mx-8" />
          <div className="flex flex-col justify-between">
            <div className="text-xs opacity-40 font-semibold">Borrow APY</div>
            <div className="text-sm font-semibold text-yellow-500">
              {borrowAPY.toFixed(2)}%
            </div>
          </div>
        </div>
        <Button className="sm:ml-6" variant="secondary" onClick={onSupplyCb}>
          Supply
        </Button>
        <Button className="sm:ml-4" variant="secondary" onClick={onBorrowCb}>
          Borrow
        </Button>
      </div>
    </Link>
  );
};
