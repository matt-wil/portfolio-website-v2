import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoVimBufferProps {
  children: ReactNode;
  lines: number;
}

export const NeoVimBuffer = ({ children, lines }: NeoVimBufferProps) => {
  const emptyLines = Array.from({ length: Math.max(0, 30 - lines) });

  return (
    <div className="flex flex-1 overflow-auto bg-cat-base">
      {/* Line Numbers Column */}
      <div className="flex flex-col border-r border-cat-surface0 bg-cat-mantle px-4 py-4 font-mono text-sm text-cat-overlay0">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-6 text-right">
            {i + 1}
          </div>
        ))}
        {emptyLines.map((_, i) => (
          <div key={`empty-${i}`} className="h-6 text-cat-blue">
            ~
          </div>
        ))}
      </div>

      {/* Buffer Content */}
      <div className="flex-1 px-6 py-4 font-mono text-sm text-cat-text">
        {children}
      </div>
    </div>
  );
};
