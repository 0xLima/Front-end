import { Londrina_Solid } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

const londrina = Londrina_Solid({ subsets: ["latin"], weight: "400" });

export const FunkyFontWrapper: FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div className={cn(className, londrina.className)}>{children}</div>
);
