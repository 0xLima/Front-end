"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";
import { abi } from "../../abi/MockLandingPoolAbi";
import { generatePermits, lendingPoolAddress, provider } from "../../permits";
import { Permission } from "fhenixjs";
import { Action, Token } from "../../commonTypes";

export type SuccessDialogProps = {
  action: Action;
  coin: Token;
  amount: number;
};

// const DEBUG = {
//   coin: "FHE",
//   action: "Supply",
//   amount: 100,
// } as const;
export const UserContext = createContext<{
  permission?: Permission;
  tokenInContract?: ethers.Contract;
  getPermission: () => void;
  successDialogProps?: SuccessDialogProps;
  setSuccessDialogProps: (val?: SuccessDialogProps) => void;
}>({
  getPermission: () => {},
  successDialogProps: undefined,
  setSuccessDialogProps: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [tokenInContract, setTokenInContract] = useState<ethers.Contract>();
  const [permission, setPermission] = useState<Permission>();
  const [successDialogProps, setSuccessDialogProps] = useState<
    SuccessDialogProps | undefined
  >(undefined);
  useEffect(() => {
    (async () => {
      const signer = await provider.getSigner();
      const tokenInContract = new ethers.Contract(
        lendingPoolAddress,
        abi,
        signer,
      );
      setTokenInContract(tokenInContract);
    })();
  }, []);

  const getPermission = useCallback(async () => {
    const permission = await generatePermits(lendingPoolAddress, provider);
    setPermission(permission);
  }, []);
  return (
    <UserContext.Provider
      value={{
        successDialogProps,
        setSuccessDialogProps,
        tokenInContract,
        getPermission,
        permission,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
