import Image from "next/image";
import icon from "./FHEIcon.png";

export const FHEIcon = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Image
    className={className}
    width={width ?? 40}
    height={height ?? 40}
    src={icon.src}
    alt="FHE Icon"
  />
);
