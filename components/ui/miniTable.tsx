import { cn } from "../../lib/utils";

export const MiniTable = ({
  infoRows,
  rounded,
}: {
  rounded?: boolean;
  infoRows: { title: string; value: string }[];
}) => (
  <div className="mt-4">
    {infoRows.map((r, i) => (
      <div
        key={r.title}
        className={cn(
          "flex px-2 py-[2px] h-8 items-center justify-between opacity-60",
          i % 2 === 0 && "bg-opacity-5 bg-black",
          rounded && "rounded-lg",
        )}
      >
        <span>{r.title}</span>
        <span>{r.value}</span>
      </div>
    ))}
  </div>
);
