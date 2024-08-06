"use client";
import { SupplyBorrowCard } from "../components/ui/supplyBorrowCard";
import { AccountInfo } from "../components/ui/accountInfo";
import { ActiveMarkets } from "../components/ui/activeMarkets";
import { YourPositions } from "../components/ui/yourPositions";
import { useCallback, useContext, useEffect, useState } from "react";
import { CardDialog } from "../components/ui/cardDialog";
import { Action, Token, RestorativeAction, tokens } from "../commonTypes";
import { ConnectionRequired } from "../components/ui/connectionRequired";
import { BalanceContext } from "../components/ui/balanceProvider";

global.document?.documentElement.style.setProperty("--gradient-step", "580px");
export default function Home() {
  useEffect(() => {
    global.document?.documentElement.style.setProperty(
      "--gradient-step",
      "580px",
    );
  }, []);
  const [dialogProps, setDialogProps] = useState<{
    action: Action | RestorativeAction;
    coin: Token;
    amount?: string;
  } | null>(null);

  const handleAction = useCallback(
    (action: Action | RestorativeAction, coin: Token, amount?: string) => {
      console.log({ action, coin });
      setDialogProps({ action, coin, amount });
    },
    [],
  );
  const handleDialogOpenChange = useCallback((opened: boolean) => {
    if (!opened) {
      setDialogProps(null);
    }
  }, []);

  const { balance } = useContext(BalanceContext);

  return (
    <ConnectionRequired>
      <main className="flex flex-col flex-grow items-center justify-between pt-6 md:pt-[100px] px-5 backdrop-blur-sm sm:backdrop-blur-none">
        <CardDialog
          dialogProps={dialogProps}
          onOpenChange={handleDialogOpenChange}
        />
        <section className="max-w-[580px] w-full flex flex-col gap-6">
          <SupplyBorrowCard />
          <AccountInfo />
        </section>
        <section className="flex flex-col mt-9 mb-14 w-full gap-14">
          <ActiveMarkets
            onAction={handleAction}
            markets={[
              {
                coin: "FHE",
                name: tokens.FHE.name,
                poolUtilization: tokens.FHE.tempHardcoded.poolUtilization,
                supplyAPY: tokens.FHE.tempHardcoded.supplyAPY,
                borrowAPY: tokens.FHE.tempHardcoded.borrowAPY,
              },
              {
                coin: "USDF",
                name: tokens.USDF.name,
                poolUtilization: tokens.USDF.tempHardcoded.poolUtilization,
                supplyAPY: tokens.USDF.tempHardcoded.supplyAPY,
                borrowAPY: tokens.USDF.tempHardcoded.borrowAPY,
              },
            ]}
          />
          <YourPositions
            onAction={handleAction}
            supplying={{
              positions: [
                {
                  coin: "FHE",
                  name: tokens.FHE.name,
                  amount: balance?.FHE.liquidityBalance ?? 0n,
                  apy: tokens.FHE.tempHardcoded.supplyAPY,
                },
                {
                  coin: "USDF",
                  name: tokens.USDF.name,
                  amount: balance?.USDF.liquidityBalance ?? 0n,
                  apy: tokens.USDF.tempHardcoded.supplyAPY,
                },
              ],
            }}
            borrowing={{
              positions: [
                {
                  coin: "FHE",
                  name: tokens.FHE.name,
                  amount: balance?.FHE.borrowBalance ?? 0n,
                  apy: tokens.FHE.tempHardcoded.borrowAPY,
                },
                {
                  coin: "USDF",
                  name: tokens.USDF.name,
                  amount: balance?.USDF.borrowBalance ?? 0n,
                  apy: tokens.USDF.tempHardcoded.borrowAPY,
                },
              ],
            }}
          />
        </section>
      </main>
    </ConnectionRequired>
  );
}
