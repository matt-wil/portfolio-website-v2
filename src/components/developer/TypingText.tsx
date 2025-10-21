import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const highlightCode = (code: string) => {
  const lines = code.split("\n");

  return lines.map((line, lineIndex) => {
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[0] : "";
    const codePart = line.slice(indent.length);

    const highlightedPart = codePart
      .replace(/const|if|return/g, '<span class="text-dev-mauve">$&</span>') // Keywords
      .replace(
        /checkIfDeveloper|enter/g,
        '<span class="text-dev-blue">$&</span>',
      ) // Function names
      .replace(/understands/g, '<span class="text-dev-yellow">$&</span>') // Parameter
      .replace(/boolean|void/g, '<span class="text-dev-yellow">$&</span>') // TypeScript Types
      .replace(/true/g, '<span class="text-dev-orange">$&</span>') // Boolean
      .replace(
        /\{|\}|\(|\)|===|;|: |=>/g,
        '<span class="text-dev-sky">$&</span>',
      ); // UPDATED: Operators/Punctuation

    return (
      <React.Fragment key={lineIndex}>
        {indent}
        <span dangerouslySetInnerHTML={{ __html: highlightedPart }} />
        {lineIndex < lines.length - 1 ? "\n" : ""} {/* Add newline back */}
      </React.Fragment>
    );
  });
};

export const TypingText = ({
  text,
  className = "",
  delay = 0,
  speed = 40,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return <span className={className}>{highlightCode(displayedText)}</span>;
};
