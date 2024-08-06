import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { FC, PropsWithChildren } from "react";
import { FunkyFontWrapper } from "./funkyFontWrapper";

export const ConnectionRequired: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useDynamicContext();

  if (isAuthenticated) {
    return children;
  }
  return (
    <main className="flex-grow min-h-[300px] grid items-center">
      <FunkyFontWrapper className="text-[60px] text-center">
        Connect the wallet
        <br />
        to use the app
      </FunkyFontWrapper>
    </main>
  );
};
