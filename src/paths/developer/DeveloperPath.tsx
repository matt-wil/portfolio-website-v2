"use client";

import { useState, useEffect } from "react";
import { NeoVimBuffer } from "@/components/developer/NeoVimBuffer";
import { StatusLine } from "@/components/developer/StatusLine";
import { FuzzyFinder } from "@/components/developer/FuzzyFinder";
import { ReadmeBuffer } from "@/components/developer/buffers/ReadmeBuffer";
import { AboutBuffer } from "@/components/developer/buffers/AboutBuffer";
import { ProjectBuffer } from "@/components/developer/buffers/ProjectBuffer";
import { ContactBuffer } from "@/components/developer/buffers/ContactBuffer";
import { ProjectsListBuffer } from "@/components/developer/buffers/ProjectListBuffer";
import { DevMobilePath } from "@/components/developer/DevMobilePath";

type BufferType = "README.md" | "about.lua" | string;

export const DeveloperPath = () => {
  const [currentBuffer, setCurrentBuffer] = useState<BufferType>("README.md");
  const [isFuzzyOpen, setIsFuzzyOpen] = useState(false);
  const [mode, setMode] = useState<"NORMAL" | "INSERT">("NORMAL");
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  const [command, setCommand] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        setIsFuzzyOpen(true);
      } else if (e.key === ":" && mode === "NORMAL") {
        e.preventDefault();
        setMode("INSERT");
        setCommand(":");
      } else if (e.key === "Escape" && command) {
        setCommand("");
        setMode("NORMAL");
      } else if (e.key === "Enter" && command) {
        e.preventDefault();
        if (command === ":contact") {
          setCurrentBuffer("contact.md");
        }
        setCommand("");
        setMode("NORMAL");
      } else if (command && e.key.length === 1) {
        setCommand((prev) => prev + e.key);
      } else if (command && e.key === "Backspace") {
        setCommand((prev) => prev.slice(0, -1));
        if (command === ":") {
          setMode("NORMAL");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [command, mode]);

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
    if (currentBuffer === "contact.md") return 15;
    return 25;
  };

  const renderBuffer = () => {
    if (currentBuffer === "README.md") {
      return <ReadmeBuffer />;
    } else if (currentBuffer === "about.lua") {
      return <AboutBuffer />;
    } else if (currentBuffer === "contact.md") {
      return <ContactBuffer />;
    } else if (currentBuffer === "projects/") {
      return <ProjectsListBuffer />;
    } else if (
      currentBuffer.startsWith("projects/") &&
      currentBuffer !== "projects/"
    ) {
      const filename = currentBuffer.replace("projects/", "");
      return <ProjectBuffer filename={filename} />;
    }
    return <div className="text-cat-red">Buffer not found</div>;
  };

  return (
    <>
      <div className="md:hidden">
        <DevMobilePath />
      </div>

      <div className="hidden md:flex h-screen w-screen flex-col bg-cat-base font-mono text-cat-text">
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

        {/* Command Bar */}
        {command && (
          <div className="border-t border-cat-surface0 bg-cat-base px-4 py-1 font-mono text-sm text-cat-text">
            {command}
            <span className="animate-blink">▋</span>
          </div>
        )}

        {/* Fuzzy Finder Modal */}
        <FuzzyFinder
          isOpen={isFuzzyOpen}
          onClose={() => setIsFuzzyOpen(false)}
          onSelect={handleFileSelect}
        />
      </div>
    </>
  );
};
