// src/components/paths/developer/DeveloperPortfolio.tsx

import { useState, useEffect } from "react";
import Buffer from "@/components/Buffer";
import StatusLine from "@/components/StatusLine";
import CommandBar from "@/components/CommandBar";
import FuzzyFinder from "@/components/FuzzyFinder";
import { buffers } from "@/components/data/buffers";

const DeveloperPortfolio = () => {
  const [currentFile, setCurrentFile] = useState("README.md");
  const [finderOpen, setFinderOpen] = useState(false);
  const [mode, setMode] = useState<"NORMAL" | "INSERT" | "VISUAL">("NORMAL");
  const [cursorPos, setCursorPos] = useState({ line: 1, column: 1 });

  const currentBuffer = buffers[currentFile];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (finderOpen) return;

      if (e.code === "Space" && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        setFinderOpen(true);
      }

      if (e.key === "i") {
        setMode("INSERT");
        setTimeout(() => setMode("NORMAL"), 2000);
      }
      if (e.key === "v") {
        setMode("VISUAL");
        setTimeout(() => setMode("NORMAL"), 2000);
      }
      if (e.key === "Escape") {
        setMode("NORMAL");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finderOpen]);

  const handleFileSelect = (path: string) => {
    setCurrentFile(path);
    setCursorPos({ line: 1, column: 1 });
  };

  return (
    // CORRECTED: Set the correct background for the developer theme
    <div className="relative flex h-screen flex-col overflow-hidden bg-buffer-background text-foreground crt-scanlines font-mono">
      {/* Main editor area */}
      <div className="flex-1 overflow-hidden">
        <Buffer
          content={currentBuffer.content}
          filename={currentBuffer.filename}
          filetype={currentBuffer.filetype}
        />
      </div>

      {/* Status line */}
      <StatusLine
        mode={mode}
        filename={currentBuffer.filename}
        filetype={currentBuffer.filetype}
        line={cursorPos.line}
        column={cursorPos.column}
      />

      {/* Command bar */}
      <CommandBar />

      {/* Fuzzy finder modal */}
      <FuzzyFinder
        isOpen={finderOpen}
        onClose={() => setFinderOpen(false)}
        onSelect={handleFileSelect}
        currentFile={currentFile}
      />
    </div>
  );
};

export default DeveloperPortfolio;
