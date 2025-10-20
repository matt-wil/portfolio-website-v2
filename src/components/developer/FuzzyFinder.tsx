import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FuzzyFinderProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (file: string) => void;
}

const files = [
  { name: "README.md", icon: "", type: "markdown" },
  { name: "about.lua", icon: "", type: "lua" },
  { name: "projects/", icon: "", type: "directory" },
  { name: "projects/ecommerce-platform.md", icon: "", type: "markdown" },
  { name: "projects/ai-chatbot.md", icon: "", type: "markdown" },
  { name: "projects/portfolio-site.md", icon: "", type: "markdown" },
];

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
            className="fixed inset-0 bg-cat-crust/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Fuzzy Finder Modal */}
          <motion.div
            className="fixed left-1/2 top-1/4 w-full max-w-2xl -translate-x-1/2 border border-cat-surface1 bg-cat-base shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input */}
            <div className="border-b border-cat-surface0 bg-cat-mantle px-4 py-3 font-mono text-sm">
              <span className="text-cat-mauve">❯ </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-cat-text outline-none placeholder:text-cat-overlay0"
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
                      ? "bg-cat-surface1 text-cat-text"
                      : "text-cat-subtext hover:bg-cat-surface0"
                  }`}
                  onClick={() => {
                    onSelect(file.name);
                    onClose();
                  }}
                  whileHover={{ x: 4 }}
                >
                  <span className="mr-2 text-cat-blue">{file.icon}</span>
                  {file.name}
                  <span className="ml-2 text-xs text-cat-overlay0">
                    {file.type}
                  </span>
                </motion.div>
              ))}
              {filteredFiles.length === 0 && (
                <div className="px-4 py-8 text-center font-mono text-sm text-cat-overlay0">
                  No files found
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-cat-surface0 bg-cat-mantle px-4 py-2 font-mono text-xs text-cat-overlay0">
              <span className="text-cat-mauve">↑↓</span> navigate{" "}
              <span className="ml-4 text-cat-mauve">Enter</span> select{" "}
              <span className="ml-4 text-cat-mauve">Esc</span> close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
