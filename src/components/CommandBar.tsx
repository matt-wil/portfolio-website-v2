// src/components/CommandBar.tsx

interface CommandBarProps {
  command?: string;
  onCommand?: (cmd: string) => void;
}

const CommandBar = ({ command = "", onCommand }: CommandBarProps) => {
  return (
    // CORRECTED: Use a theme color instead of the default background
    <div className="border-t border-split bg-statusline-bg px-4 py-1 font-mono text-sm">
      {command ? (
        <div className="flex items-center">
          {/* CORRECTED: text-syntax-keyword -> text-keyword */}
          <span className="text-keyword">:</span>
          <span className="ml-1 text-foreground">{command}</span>
          <span className="ml-1 inline-block w-2 bg-cursor cursor-blink">
            &nbsp;
          </span>
        </div>
      ) : (
        <div className="text-muted">
          {/* CORRECTED: text-syntax-string -> text-string */}
          <span className="text-string">Press SPACE</span> to navigate
          {/* CORRECTED: text-syntax-constant -> text-constant */}
          files or type <span className="text-constant">:contact</span> to
          connect
        </div>
      )}
    </div>
  );
};

export default CommandBar;
