interface StatusLineProps {
  mode: "NORMAL" | "INSERT";
  filename: string;
  filetype: string;
  line: number;
  col: number;
}

export const StatusLine = ({
  mode,
  filename,
  filetype,
  line,
  col,
}: StatusLineProps) => {
  return (
    <>
      {/* Status Line */}
      <div className="flex items-center justify-between border-t border-dev-surface0 bg-dev-surface1 px-4 py-1 font-mono text-xs text-dev-text">
        <div className="flex items-center gap-4">
          <span className="font-bold text-dev-mauve">
            {mode === "NORMAL" ? "-- NORMAL --" : "-- INSERT --"}
          </span>
          <span className="text-dev-green"> main</span>
          <span className="text-dev-blue">{filename}</span>
          <span className="text-dev-subtext">{filetype}</span>
        </div>
        <div className="text-dev-subtext">
          Ln {line}, Col {col}
        </div>
      </div>

      {/* Command Bar */}
      <div className="bg-dev-crust px-4 py-1 font-mono text-sm text-dev-text">
        <span className="text-dev-yellow">:</span>
      </div>
    </>
  );
};
