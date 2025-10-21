import { ReactNode } from "react";

interface NeoVimBufferProps {
  children: ReactNode;
  lines: number;
}

export const NeoVimBuffer = ({ children, lines }: NeoVimBufferProps) => {
  const emptyLines = Array.from({ length: Math.max(0, 30 - lines) });

  return (
    <div className="flex flex-1 overflow-auto bg-dev-base">
      {/* Line Numbers Column */}
      <div className="flex flex-col border-r border-dev-surface0 bg-dev-mantle px-4 py-4 font-mono text-sm text-dev-overlay0">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-6 text-right">
            {i + 1}
          </div>
        ))}
        {emptyLines.map((_, i) => (
          <div key={`empty-${i}`} className="h-6 text-dev-blue">
            ~
          </div>
        ))}
      </div>

      {/* Buffer Content */}
      <div className="flex-1 px-6 py-4 font-mono text-sm text-dev-text">
        {children}
      </div>
    </div>
  );
};
