"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Token, UserBalance } from "../../commonTypes";
import { useUserPoolData } from "../../hooks/useUserPoolData";
import { SuccessDialog } from "./successDialog";

export const BalanceContext = createContext<{
  balance: Record<Token, UserBalance> | undefined;
  reRequestBalance: () => void;
}>({
  balance: undefined,
  reRequestBalance: () => {},
});

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [key, setKey] = useState(1);
  const fheBalance = useUserPoolData("FHE", key);
  const usdfBalance = useUserPoolData("USDF", key);
  const balanceReady = fheBalance && usdfBalance;
  const reRequestBalance = useCallback(() => setKey((key) => key + 1), []);
  const balance = useMemo(() => {
    return (
      balanceReady && {
        FHE: fheBalance,
        USDF: usdfBalance,
      }
    );
  }, [balanceReady, fheBalance, usdfBalance]);
  return (
    <BalanceContext.Provider
      value={{
        balance,
        reRequestBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
