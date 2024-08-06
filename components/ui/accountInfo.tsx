import { cn } from "../../lib/utils";
import { FunkyFontWrapper } from "./funkyFontWrapper";
import { Hidable } from "./hidable";
import { Icon } from "./icons";
import { VerticalDivider } from "./verticalDivider";
import { BalanceContext } from "./balanceProvider";
import { useContext } from "react";
import { CircularProgress } from "./circularProgress";

export const AccountInfo = () => {
  const { balance } = useContext(BalanceContext);
  const supplyingTotal = !balance
    ? 0n
    : Object.values(balance).reduce((acc, b) => acc + b.liquidityBalance, 0n);

  const borrowingTotal = !balance
    ? 0n
    : Object.values(balance).reduce((acc, b) => acc + b.borrowBalance, 0n);

  const health =
    borrowingTotal === 0n
      ? 100
      : Math.min(
          100,
          Math.max(
            0,
            Math.floor((Number(supplyingTotal) / Number(borrowingTotal)) * 100),
          ),
        );
  const items = [
    {
      title: "YOU’RE SUPPLYING",
      value: supplyingTotal.toLocaleString(),
      coins: (["USDF", "FHE"] as const).filter(
        (c) => balance?.[c]?.liquidityBalance,
      ),
    },
    {
      title: "YOU’RE BORROWING",
      value: borrowingTotal.toLocaleString(),
      coins: (["USDF", "FHE"] as const).filter(
        (c) => balance?.[c]?.borrowBalance,
      ),
    },
  ] as const;

  return (
    <section className="flex justify-between w-full relative">
      {items.map((i) => {
        const coins = i.coins
          .slice(0, 3)
          .filter(Boolean)
          .map((c, i) => {
            const CoinIcon = Icon[c];
            return (
              <CoinIcon
                style={{ marginLeft: i * -4.4 }}
                width={16}
                height={16}
                key={c}
              />
            );
          });
        return (
          <AccountInfoItem
            key={i.title}
            title={i.title}
            value={
              <Hidable>
                <span className="pr-2">{i.value}</span>
                {coins}
              </Hidable>
            }
          />
        );
      })}
      <VerticalDivider />
      <AccountInfoItem
        title="ACCOUNT HEALTH"
        floatRight
        value={
          <Hidable>
            <span className="pr-2 text-green-500">{health}%</span>
            <CircularProgress percent={health} width={21} height={21} />
          </Hidable>
        }
      />
    </section>
  );
};

const AccountInfoItem = ({
  title,
  value,
  floatRight,
}: {
  title: string;
  value: JSX.Element;
  floatRight?: boolean;
}) => {
  return (
    <div>
      <div className="text-xs opacity-40">{title}</div>
      <FunkyFontWrapper
        className={cn(
          "text-[28px] flex flex-row items-center",
          floatRight && "justify-end",
        )}
      >
        <Hidable>{value}</Hidable>
      </FunkyFontWrapper>
    </div>
  );
};
