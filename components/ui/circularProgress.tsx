import { SVGProps } from "react";

// svg {
//   transform: rotate(-90deg);
// }

// .percent {
//   stroke-dasharray: 100;
//   stroke-dashoffset: 100;
//   stroke-linecap: round;
// }

export const CircularProgress = ({
  percent,
  ...props
}: SVGProps<SVGSVGElement> & { percent: number }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="rotate-[-90deg]"
    {...props}
  >
    <circle
      cx="60"
      cy="60"
      r="54"
      fill="none"
      stroke="#e6e6e6"
      strokeWidth="12"
    />
    <circle
      strokeDasharray={100}
      strokeDashoffset={100}
      cx="60"
      cy="60"
      r="54"
      fill="none"
      stroke="#81E51C"
      strokeWidth="12"
      pathLength="100"
      style={{
        strokeDashoffset: 100 - percent,
      }}
    />
  </svg>
);
