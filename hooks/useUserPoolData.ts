import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/ui/userContextProvider";
import { Token, UserBalance, tokens } from "../commonTypes";
import { useAccount } from "wagmi";
import { fhenixClient, lendingPoolAddress } from "../permits";

export const useUserPoolData = (token: Token, key: number) => {
  const { address } = useAccount();
  const { tokenInContract, permission } = useContext(UserContext);
  const [balance, setBalance] = useState<UserBalance | undefined>();
  useEffect(() => {
    if (!address || !permission || !token || !tokenInContract) return;
    (async () => {
      const [liquidityBalanceSealed, borrowBalanceSealed, third] =
        await tokenInContract?.getUserPoolDataSealOutput(
          address,
          tokens[token].address,
          permission,
        );
      console.log({ third });
      const liquidityBalance = fhenixClient.unseal(
        lendingPoolAddress,
        liquidityBalanceSealed,
      );
      const borrowBalance = fhenixClient.unseal(
        lendingPoolAddress,
        borrowBalanceSealed,
      );
      setBalance({
        liquidityBalance: liquidityBalance,
        borrowBalance: borrowBalance,
      });
      console.log({
        liquidityBalance,
        borrowBalance,
      });
    })();
  }, [address, permission, token, tokenInContract, key]);
  return balance;
};
