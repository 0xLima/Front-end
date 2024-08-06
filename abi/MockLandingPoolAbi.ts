export const abi = [
  {
    inputs: [
      {
        internalType: "contract AlTokenDeployer",
        name: "_alTokenDeployer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "SignerNotMessageSender",
    type: "error",
  },
  {
    inputs: [],
    name: "SignerNotOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidateAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidateShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "Liquidate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "poolConfigAddress",
        type: "address",
      },
    ],
    name: "PoolConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "alTokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolConfigAddress",
        type: "address",
      },
    ],
    name: "PoolInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeBorrowInterest",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBorrows",
        type: "uint256",
      },
    ],
    name: "PoolInterestUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "priceOracleAddress",
        type: "address",
      },
    ],
    name: "PoolPriceOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousReservePercent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newReservePercent",
        type: "uint256",
      },
    ],
    name: "ReservePercentUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
    ],
    name: "ReserveWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "CLOSE_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EQUILIBRIUM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_UTILIZATION_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "alTokenDeployer",
    outputs: [
      {
        internalType: "contract AlTokenDeployer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "burnEncryptedAlToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "calculateAlphaReward",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_liquidateAmount",
        type: "uint256",
      },
      {
        internalType: "contract FHERC20",
        name: "_collateral",
        type: "address",
      },
    ],
    name: "calculateCollateralAmountExternal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_rate",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTimestamp",
        type: "uint256",
      },
    ],
    name: "calculateLinearInterestExternal",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateRoundDownBorrowShareAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_shareAmount",
        type: "uint256",
      },
    ],
    name: "calculateRoundDownLiquidityAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateRoundDownLiquidityShareAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_shareAmount",
        type: "uint256",
      },
    ],
    name: "calculateRoundUpBorrowAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateRoundUpBorrowShareAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateRoundUpLiquidityShareAmountExternal",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "callAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAlpha",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "contract IAlphaDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "enum LendingPool.PoolStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "alTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolConfigAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getTotalAvailableLiquidity",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getTotalLiquidity",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserAccount",
    outputs: [
      {
        internalType: "euint16",
        name: "totalLiquidityBalanceBase",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "totalCollateralBalanceBase",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "totalBorrowBalanceBase",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getUserCompoundedBorrowBalance",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getUserCompoundedLiquidityBalance",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "publicKey",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Permission",
        name: "auth",
        type: "tuple",
      },
    ],
    name: "getUserPoolDataSealOutput",
    outputs: [
      {
        internalType: "bytes",
        name: "compoundedLiquidityBalance",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "compoundedBorrowBalance",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "userUsePoolAsCollateral",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IPoolConfiguration",
        name: "_poolConfig",
        type: "address",
      },
    ],
    name: "initPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isAccountHealthy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidateShares",
        type: "uint256",
      },
      {
        internalType: "contract FHERC20",
        name: "_collateral",
        type: "address",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "mintEncryptedAlToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "enum LendingPool.PoolStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "contract AlToken",
        name: "alToken",
        type: "address",
      },
      {
        internalType: "contract IPoolConfiguration",
        name: "poolConfig",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "totalBorrows",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "totalBorrowShares",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "poolReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "totalAlphaTokenReward",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "alphaMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAlphaDistributor",
        name: "_distributor",
        type: "address",
      },
    ],
    name: "setDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_totalBorrows",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_totalBorrowShares",
        type: "tuple",
      },
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IPoolConfiguration",
        name: "_poolConfig",
        type: "address",
      },
    ],
    name: "setPoolConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "euint16",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setPoolReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "enum LendingPool.PoolStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "setPoolStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPriceOracle",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePercent",
        type: "uint256",
      },
    ],
    name: "setReservePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_useAsCollateral",
        type: "bool",
      },
      {
        internalType: "euint16",
        name: "_borrowShares",
        type: "uint256",
      },
    ],
    name: "setUserPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_useAsCollateral",
        type: "bool",
      },
    ],
    name: "setUserUseAsCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVestingAlpha",
        name: "_vestingAlpha",
        type: "address",
      },
    ],
    name: "setVestingAlpha",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenList",
    outputs: [
      {
        internalType: "contract FHERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "totalBorrowInUSD",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userPoolData",
    outputs: [
      {
        internalType: "bool",
        name: "disableUseAsCollateral",
        type: "bool",
      },
      {
        internalType: "euint16",
        name: "borrowShares",
        type: "uint256",
      },
      {
        internalType: "euint16",
        name: "latestAlphaMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingAlpha",
    outputs: [
      {
        internalType: "contract IVestingAlpha",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_share",
        type: "tuple",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FHERC20",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint16",
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "withdrawReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;