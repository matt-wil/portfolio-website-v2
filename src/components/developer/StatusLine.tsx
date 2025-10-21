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
      <div className="flex items-center justify-between border-t border-cat-surface0 bg-cat-surface1 px-4 py-1 font-mono text-xs text-cat-text">
        <div className="flex items-center gap-4">
          <span className="font-bold text-cat-mauve">
            {mode === "NORMAL" ? "-- NORMAL --" : "-- INSERT --"}
          </span>
          <span className="text-cat-green"> main</span>
          <span className="text-cat-blue">{filename}</span>
          <span className="text-cat-subtext">{filetype}</span>
        </div>
        <div className="text-cat-subtext">
          Ln {line}, Col {col}
        </div>
      </div>

      {/* Command Bar */}
      <div className="bg-cat-crust px-4 py-1 font-mono text-sm text-cat-text">
        <span className="text-cat-yellow">:</span>
      </div>
    </>
  );
};
