import { Token } from "../../commonTypes";
import { FunkyFontWrapper } from "./funkyFontWrapper";
import { Icon } from "./icons";

export const FirstColumn = ({
  coin,
  name,
  data,
}: {
  coin: Token;
  name: string;
  data: {
    label: string;
    value: string;
    valueClassName?: string;
  };
}) => {
  const CoinIcon = Icon[coin];
  return (
    <div className="flex flex-row flex-grow">
      <CoinIcon className="mr-3" />
      <div className="flex flex-col justify-between">
        <FunkyFontWrapper className="text-xl leading-none">
          {name}
        </FunkyFontWrapper>
        <div className="text-xs font-semibold">
          <span className="opacity-40">{data.label}: </span>
          <span className={data.valueClassName ?? "opacity-40"}>
            {data.value}
          </span>
        </div>
      </div>
    </div>
  );
};
