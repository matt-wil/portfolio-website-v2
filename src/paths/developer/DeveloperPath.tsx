"use client";

import { useState, useEffect } from "react";
import { NeoVimBuffer } from "@/components/developer/NeoVimBuffer";
import { StatusLine } from "@/components/developer/StatusLine";
import { FuzzyFinder } from "@/components/developer/FuzzyFinder";
import { ReadmeBuffer } from "@/components/developer/buffers/ReadmeBuffer";
import { AboutBuffer } from "@/components/developer/buffers/AboutBuffer";
import { ProjectBuffer } from "@/components/developer/buffers/ProjectBuffer";

type BufferType = "README.md" | "about.lua" | string;

export const DeveloperPath = () => {
  const [currentBuffer, setCurrentBuffer] = useState<BufferType>("README.md");
  const [isFuzzyOpen, setIsFuzzyOpen] = useState(false);
  const [mode, setMode] = useState<"NORMAL" | "INSERT">("NORMAL");
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        setIsFuzzyOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFileSelect = (filename: string) => {
    setCurrentBuffer(filename);
  };

  const getFileType = (filename: string) => {
    if (filename.endsWith(".md")) return "markdown";
    if (filename.endsWith(".lua")) return "lua";
    return "text";
  };

  const getLineCount = () => {
    if (currentBuffer === "README.md") return 20;
    if (currentBuffer === "about.lua") return 35;
    return 25;
  };

  const renderBuffer = () => {
    if (currentBuffer === "README.md") {
      return <ReadmeBuffer />;
    } else if (currentBuffer === "about.lua") {
      return <AboutBuffer />;
    } else if (currentBuffer.startsWith("projects/")) {
      const filename = currentBuffer.replace("projects/", "");
      return <ProjectBuffer filename={filename} />;
    }
    return <div className="text-cat-red">Buffer not found</div>;
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-cat-base font-mono text-cat-text">
      {/* CRT Scanline Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)",
        }}
      />

      {/* Main Buffer */}
      <NeoVimBuffer lines={getLineCount()}>{renderBuffer()}</NeoVimBuffer>

      {/* Status Line & Command Bar */}
      <StatusLine
        mode={mode}
        filename={currentBuffer}
        filetype={getFileType(currentBuffer)}
        line={cursorPos.line}
        col={cursorPos.col}
      />

      {/* Fuzzy Finder Modal */}
      <FuzzyFinder
        isOpen={isFuzzyOpen}
        onClose={() => setIsFuzzyOpen(false)}
        onSelect={handleFileSelect}
      />
    </div>
  );
};
