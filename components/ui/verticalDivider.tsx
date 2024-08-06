import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const VerticalDivider = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => <div {...props} className={cn(props.className, "w-[1px] bg-[#D9D9D9]")} />;
