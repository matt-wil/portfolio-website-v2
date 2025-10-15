// src/components/FuzzyFinder.tsx

import { useState, useEffect, useRef } from "react";
import { FileText, Code2, Folder, Mail, type LucideIcon } from "lucide-react";

interface FileItem {
  name: string;
  path: string;
  type: "file" | "directory";
  icon: LucideIcon;
}

interface FuzzyFinderProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (path: string) => void;
  currentFile: string;
}

const FuzzyFinder = ({
  isOpen,
  onClose,
  onSelect,
  currentFile,
}: FuzzyFinderProps) => {
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const files: FileItem[] = [
    { name: "README.md", path: "README.md", type: "file", icon: FileText },
    { name: "about.lua", path: "about.lua", type: "file", icon: Code2 },
    { name: "projects/", path: "projects/", type: "directory", icon: Folder },
    { name: "contact.md", path: "contact.md", type: "file", icon: Mail },
  ];

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSelected(0);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelected((prev) => Math.min(prev + 1, filteredFiles.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelected((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredFiles[selected]) {
            onSelect(filteredFiles[selected].path);
            onClose();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selected, filteredFiles, onSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 pt-32 backdrop-blur-sm">
      {/* CORRECTED: bg-buffer -> bg-buffer-background */}
      <div className="w-full max-w-2xl border border-split bg-buffer-background shadow-2xl">
        {/* Header */}
        {/* CORRECTED: bg-statuslinebg -> bg-statusline-bg, text-statuslinefg -> text-statusline-fg */}
        <div className="border-b border-split bg-statusline-bg px-4 py-2 text-sm text-statusline-fg">
          {/* CORRECTED: text-syntaxfunction -> text-function */}
          <span className="text-function">Telescope</span>
          <span className="mx-2 text-muted">›</span>
          <span>Find Files</span>
        </div>

        {/* Input */}
        {/* CORRECTED: bg-buffer -> bg-buffer-background */}
        <div className="border-b border-split bg-buffer-background px-4 py-3">
          <div className="flex items-center">
            {/* CORRECTED: text-syntaxconstant -> text-constant */}
            <span className="text-constant">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="ml-2 w-full bg-transparent text-foreground outline-none placeholder:text-muted"
              placeholder="Search files..."
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {filteredFiles.map((file, index) => {
            const Icon = file.icon;
            const isSelected = index === selected;
            const isCurrent = file.path === currentFile;

            return (
              <div
                key={file.path}
                // CORRECTED: text-syntaxfunction -> text-function
                className={`flex items-center gap-3 px-4 py-2 ${
                  isSelected ? "bg-selection" : ""
                } ${isCurrent ? "text-function" : "text-foreground"} cursor-pointer transition-colors hover:bg-selection`}
                onClick={() => {
                  onSelect(file.path);
                  onClose();
                }}
              >
                <Icon
                  size={16}
                  // CORRECTED: text-syntaxtype -> text-type, text-syntaxconstant -> text-constant
                  className={
                    file.type === "directory" ? "text-type" : "text-constant"
                  }
                />
                <span className="font-mono">{file.name}</span>
                {isCurrent && (
                  <span className="ml-auto text-xs text-muted">[current]</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {/* CORRECTED: bg-statuslinebg -> bg-statusline-bg, text-syntaxkeyword -> text-keyword */}
        <div className="border-t border-split bg-statusline-bg px-4 py-2 text-xs text-muted">
          <span className="text-keyword">↑↓</span> navigate{" "}
          <span className="ml-3 text-keyword">Enter</span> select{" "}
          <span className="ml-3 text-keyword">Esc</span> close
        </div>
      </div>
    </div>
  );
};

export default FuzzyFinder;
