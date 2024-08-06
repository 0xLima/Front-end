import { FC } from "react";
import { Token } from "../../../commonTypes";
import { FHEIcon } from "./FHEIcon";
import { USDFIcon } from "./USDFIcon";

export const Icon: Record<
  Token,
  FC<{
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
  }>
> = {
  FHE: FHEIcon,
  USDF: USDFIcon,
};
