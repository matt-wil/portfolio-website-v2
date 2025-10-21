import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { files } from "@/lib/constants";

interface FuzzyFinderProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (file: string) => void;
}

export const FuzzyFinder = ({
  isOpen,
  onClose,
  onSelect,
}: FuzzyFinderProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) => Math.min(prev + 1, filteredFiles.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredFiles[selected]) {
          onSelect(filteredFiles[selected].name);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selected, filteredFiles, onSelect, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-dev-crust/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Fuzzy Finder Modal */}
          <motion.div
            className="fixed left-1/2 top-1/4 w-full max-w-2xl -translate-x-1/2 border border-dev-surface1 bg-dev-base shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input */}
            <div className="border-b border-dev-surface0 bg-dev-mantle px-4 py-3 font-mono text-sm">
              <span className="text-dev-mauve">❯ </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-dev-text outline-none placeholder:text-dev-overlay0"
                placeholder="Search files..."
                autoFocus
              />
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-auto">
              {filteredFiles.map((file, index) => (
                <motion.div
                  key={file.name}
                  className={`cursor-pointer px-4 py-2 font-mono text-sm transition-colors ${
                    index === selected
                      ? "bg-dev-surface1 text-dev-text"
                      : "text-dev-subtext hover:bg-dev-surface0"
                  }`}
                  onClick={() => {
                    onSelect(file.name);
                    onClose();
                  }}
                  whileHover={{ x: 4 }}
                >
                  <span className="mr-2 text-dev-blue">{file.icon}</span>
                  {file.name}
                  <span className="ml-2 text-xs text-dev-overlay0">
                    {file.type}
                  </span>
                </motion.div>
              ))}
              {filteredFiles.length === 0 && (
                <div className="px-4 py-8 text-center font-mono text-sm text-dev-overlay0">
                  No files found
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-dev-surface0 bg-dev-mantle px-4 py-2 font-mono text-xs text-dev-overlay0">
              <span className="text-dev-mauve">↑↓</span> navigate{" "}
              <span className="ml-4 text-dev-mauve">Enter</span> select{" "}
              <span className="ml-4 text-dev-mauve">Esc</span> close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
