// src/components/Buffer.tsx

import { useState, useEffect } from "react";

interface BufferProps {
  content: string[];
  filename: string;
  filetype: string;
  lineStart?: number;
}

const Buffer = ({
  content,
  filename,
  filetype,
  lineStart = 1,
}: BufferProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [cursorLine, setCursorLine] = useState<number>(0);

  useEffect(() => {
    setVisibleLines(0);
    setCursorLine(0);

    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < content.length) {
          return prev + 1;
        }
        return prev;
      });
      setCursorLine((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timer);
  }, [content, filename]);

  const renderLine = (line: string, index: number) => {
    let rendered = line;

    if (
      line.trim().startsWith("--") ||
      line.trim().startsWith("//") ||
      line.trim().startsWith("#")
    ) {
      // CORRECTED: text-syntax-comment -> text-comment
      return <span className="text-comment">{line}</span>;
    }

    const keywords = [
      "function",
      "return",
      "local",
      "if",
      "then",
      "end",
      "for",
      "const",
      "let",
      "var",
      "import",
      "export",
      "class",
      "def",
    ];
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      if (regex.test(line)) {
        // CORRECTED: text-syntax-keyword -> text-keyword
        rendered = rendered.replace(
          regex,
          `<span class="text-keyword">${keyword}</span>`,
        );
      }
    });

    const stringMatch = line.match(/"[^"]*"|'[^']*'/g);
    if (stringMatch) {
      stringMatch.forEach((str) => {
        // CORRECTED: text-syntax-string -> text-string
        rendered = rendered.replace(
          str,
          `<span class="text-string">${str}</span>`,
        );
      });
    }

    const functionMatch = line.match(/\b(\w+)(?=\()/g);
    if (functionMatch) {
      functionMatch.forEach((fn) => {
        // CORRECTED: text-syntax-function -> text-function
        rendered = rendered.replace(
          fn,
          `<span class="text-function">${fn}</span>`,
        );
      });
    }

    return <span dangerouslySetInnerHTML={{ __html: rendered }} />;
  };

  const totalLines = Math.max(content.length, 30);
  const emptyLines = totalLines - content.length;

  return (
    // CORRECTED: bg-buffer -> bg-buffer-background
    <div className="flex h-full overflow-hidden bg-buffer-background">
      {/* Line numbers */}
      <div className="flex-shrink-0 select-none border-r border-split px-4 py-2 text-right">
        {Array.from({ length: content.length }, (_, i) => (
          <div
            key={i}
            className={`leading-6 ${
              i === cursorLine - 1 && visibleLines > i
                ? "text-line-number-active font-semibold"
                : "text-line-number"
            }`}
          >
            {lineStart + i}
          </div>
        ))}
        {Array.from({ length: emptyLines }, (_, i) => (
          <div key={`empty-${i}`} className="leading-6 text-line-number">
            ~
          </div>
        ))}
      </div>

      {/* Buffer content */}
      <div className="flex-1 overflow-auto px-4 py-2">
        {content.map((line, index) => (
          <div
            key={index}
            className={`leading-6 ${
              index < visibleLines ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          >
            {renderLine(line, index)}
            {index === visibleLines - 1 && (
              <span className="ml-1 inline-block w-2 bg-cursor cursor-blink">
                &nbsp;
              </span>
            )}
          </div>
        ))}
        {visibleLines >= content.length && (
          <div className="leading-6">
            <span className="ml-1 inline-block w-2 bg-cursor cursor-blink">
              &nbsp;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buffer;
