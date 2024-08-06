"use client";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Logo } from "./logo";
import { Button } from "./button";
import { SVGProps, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "./userContextProvider";
import { BalanceContext } from "./balanceProvider";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { FunkyFontWrapper } from "./funkyFontWrapper";

export function Header() {
  const { setShowAuthFlow, isAuthenticated } = useDynamicContext();
  const onConnect = () => setShowAuthFlow(true);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { getPermission } = useContext(UserContext);
  const { balance } = useContext(BalanceContext);

  return (
    <header className="flex flex-col justify-between mt-12 mx-5 sm:flex-row gap-6 items-center relative">
      <div className="flex flex-row gap-5">
        <Logo />
        <ToggleGroup variant="outline" type="single" value="Tokens">
          <ToggleGroupItem value="Tokens" aria-label="Toggle bold">
            Tokens
          </ToggleGroupItem>
          <ToggleGroupItem disabled value="NFTs" aria-label="Toggle NFT">
            NFTs
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-row sm:flex-row gap-5">
        <>
          {isAuthenticated && !balance && (
            <Button
              onClick={getPermission}
              className="bg-[#7C3AED] hover:bg-[#7C3AED]/90"
            >
              <EyeIcon className={"mr-2"} />
              View Balances
            </Button>
          )}
          <DynamicWidget />
        </>
      </div>
    </header>
  );
}

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.4">
      <path
        d="M1.66699 10C1.66699 10 4.16699 4.16669 10.0003 4.16669C15.8337 4.16669 18.3337 10 18.3337 10C18.3337 10 15.8337 15.8334 10.0003 15.8334C4.16699 15.8334 1.66699 10 1.66699 10Z"
        stroke="#FAFAFA"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61931 11.381 7.50002 10.0003 7.50002C8.61961 7.50002 7.50033 8.61931 7.50033 10C7.50033 11.3807 8.61961 12.5 10.0003 12.5Z"
        stroke="#FAFAFA"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
