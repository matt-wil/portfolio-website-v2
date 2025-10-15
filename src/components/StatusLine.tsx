// src/components/StatusLine.tsx

import { GitBranch, FileCode } from "lucide-react";

interface StatusLineProps {
  mode: "NORMAL" | "INSERT" | "VISUAL";
  filename: string;
  filetype: string;
  line: number;
  column: number;
  branch?: string;
}

const StatusLine = ({
  mode,
  filename,
  filetype,
  line,
  column,
  branch = "main",
}: StatusLineProps) => {
  const modeColors = {
    // CORRECTED: Removed 'syntax-' prefix
    NORMAL: "bg-keyword",
    INSERT: "bg-string",
    VISUAL: "bg-visual",
  };

  return (
    // CORRECTED: Added hyphens to class names
    <div className="flex items-center justify-between border-t border-split bg-statusline-bg px-4 py-1 text-sm text-statusline-fg">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div
          className={`${modeColors[mode]} px-3 py-0.5 font-bold text-background`}
        >
          {mode}
        </div>

        <div className="flex items-center gap-2">
          <GitBranch size={14} />
          <span>{branch}</span>
        </div>

        <div className="font-semibold">{filename}</div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FileCode size={14} />
          <span>{filetype}</span>
        </div>

        <div>
          Ln {line}, Col {column}
        </div>
      </div>
    </div>
  );
};

export default StatusLine;
