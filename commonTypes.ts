export const tokens = {
  FHE: {
    name: "Fhenix",
    symbol: "FHE",
    address: "0x1b38A893b5b46aaca4BbBB65a91F1bf271f0110C",
    // FIXME:
    tempHardcoded: {
      poolUtilization: 97,
      supplyAPY: 13.4,
      borrowAPY: 12.3,
    },
  },
  USDF: {
    name: "USDF",
    symbol: "USDF",
    address: "0x881e4Dc39fAD59Ea8361E52115b037D478a6AE09",
    // FIXME:
    tempHardcoded: {
      poolUtilization: 98,
      supplyAPY: 12.4,
      borrowAPY: 11.3,
    },
  },
} as const;

export type Token = keyof typeof tokens;

export type Market = {
  name: string;
  poolUtilization: number;
  supplyAPY: number;
  borrowAPY: number;
  coin: Token;
};

export type Position = {
  coin: Token;
  name: string;
  amount: bigint;
  apy: number;
};

export type Action = "Supply" | "Borrow";
export type RestorativeAction = "Withdraw" | "Repay";

export type UserBalance = {
  liquidityBalance: bigint;
  borrowBalance: bigint;
};
