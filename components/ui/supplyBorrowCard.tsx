"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Action, Token, RestorativeAction, tokens } from "../../commonTypes";
import { Card } from "./card";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { CardContent } from "./lendTabContent";
import { usePathname } from "next/navigation";
import { BalanceContext } from "./balanceProvider";
import { UserContext } from "./userContextProvider";
import { fhenixClient } from "../../permits";
import { useToast } from "./use-toast";
import { EncryptionTypes } from "fhenixjs";

export const SupplyBorrowCard = ({
  defaultAction,
  defaultCoin,
  totalAmount,
  noInfoRows,
  onDone,
}: {
  defaultAction?: Action | RestorativeAction;
  defaultCoin?: Token;
  totalAmount?: string;
  noInfoRows?: boolean;
  onDone?: () => void;
}) => {
  const [tab, setTab] = useState<Action | null>(
    defaultAction === "Repay" || defaultAction === "Withdraw"
      ? null
      : defaultAction ?? "Supply",
  );
  const [amount, setAmount] = useState("");
  const [isInProgress, setIsInProgress] = useState(false);
  const [coin, setCoin] = useState<Token>(defaultCoin ?? "FHE");
  const { toast } = useToast();

  const { balance, reRequestBalance } = useContext(BalanceContext);
  const { tokenInContract, setSuccessDialogProps } = useContext(UserContext);

  const onAmountConfirm = useCallback(async () => {
    if (!amount || !coin || isInProgress) return;
    const action = tab;
    const amountNum = Number.parseFloat(amount);
    setAmount("");
    setIsInProgress(true);
    switch (action) {
      case "Supply":
        try {
          const encryptedAmount = await fhenixClient.encrypt(
            Number.parseFloat(amount),
            EncryptionTypes.uint16,
          );
          const result = await tokenInContract?.deposit(
            tokens[coin].address,
            encryptedAmount,
          );
          reRequestBalance();
          onDone?.();

          setSuccessDialogProps({
            action: "Supply",
            coin,
            amount: amountNum,
          });
          console.log("SUCCESS");
        } catch (err) {
          toast({
            title: "Unexpected Error",
            description: "Failed to deposit",
          });
          console.error({ deposit: err });
        }
        setIsInProgress(false);
        break;
      case "Borrow":
        try {
          const encryptedAmount = await fhenixClient.encrypt(
            Number.parseFloat(amount),
            EncryptionTypes.uint16,
          );
          const result = await tokenInContract?.borrow(
            tokens[coin].address,
            encryptedAmount,
          );
          reRequestBalance();
          onDone?.();

          setSuccessDialogProps({
            action: "Borrow",
            coin,
            amount: amountNum,
          });
          console.log("SUCCESS");
        } catch (err) {
          toast({ title: "Unexpected Error", description: "Failed to borrow" });
          console.error({ borrow: err });
        }
        setIsInProgress(false);
        break;
    }
  }, [
    amount,
    coin,
    isInProgress,
    onDone,
    reRequestBalance,
    setSuccessDialogProps,
    tab,
    toast,
    tokenInContract,
  ]);

  useEffect(() => {
    const fn = () => {
      console.log("hashchange", location.hash);
      if (location.hash === "#supply") {
        setTab("Supply");
      } else if (location.hash === "#borrow") {
        setTab("Borrow");
      }
    };
    global.window?.addEventListener("hashchange", fn);

    return () => global.window?.removeEventListener("hashchange", fn);
  }, []);

  const infoRows = useMemo(
    () =>
      noInfoRows
        ? []
        : [
            tab === "Supply"
              ? {
                  title: "SUPPLY APY",
                  value: `${tokens[coin].tempHardcoded.supplyAPY}%`,
                }
              : {
                  title: "BORROW APY",
                  value: `${tokens[coin].tempHardcoded.borrowAPY}%`,
                },
            tab === "Supply"
              ? {
                  title: "SUPPLY BALANCE",
                  value: balance
                    ? balance[coin].liquidityBalance.toLocaleString() +
                      ` ${coin}`
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
    [noInfoRows, tab, coin, balance],
  );

  if (tab) {
    return (
      <Card className="p-6 relative">
        {isInProgress && <Spinner />}
        <Tabs value={tab} onValueChange={setTab as (action: string) => void}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Supply">Supply</TabsTrigger>
            <TabsTrigger value="Borrow">Borrow</TabsTrigger>
          </TabsList>
          <CardContent
            action={tab}
            amount={amount}
            onAmountChange={setAmount}
            coin={coin}
            totalAmount={totalAmount}
            onCoinChange={setCoin}
            onSubmit={onAmountConfirm}
            infoRows={infoRows}
          />
        </Tabs>
      </Card>
    );
  } else if (defaultAction && defaultCoin) {
    return (
      <Card className="p-6 relative">
        {isInProgress && <Spinner />}
        <CardContent
          action={defaultAction}
          amount={amount}
          totalAmount={totalAmount}
          onAmountChange={setAmount}
          coin={coin}
          onSubmit={onAmountConfirm}
        />
      </Card>
    );
  }
};

const Spinner = () => (
  <div className="inset-0 absolute grid place-items-center bg-black bg-opacity-20">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);