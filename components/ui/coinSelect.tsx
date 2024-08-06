import { Icon } from "./icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Token } from "../../commonTypes";

const iconProps = {
  width: 28,
  height: 28,
};
export const CoinSelect = ({
  value,
  onChange,
}: {
  value: Token;
  onChange: (val: Token) => void;
}) => {
  return (
    <Select onValueChange={(val) => onChange(val as Token)} value={value}>
      <SelectTrigger className="w-[142px] shrink-0">
        <CoinSelectValue coin={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <CoinSelectItem coin="FHE" />
          <CoinSelectItem coin="USDF" />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const CoinSelectItem = ({ coin }: { coin: Token }) => (
  <SelectItem value={coin}>
    <CoinSelectValue coin={coin} />
  </SelectItem>
);

const CoinSelectValue = ({ coin }: { coin: Token }) => {
  const IconComponent = Icon[coin];
  return (
    <SelectValue>
      <div className="flex flex-row gap-3 text-base items-center">
        <IconComponent {...iconProps} />
        {coin}
      </div>
    </SelectValue>
  );
};
