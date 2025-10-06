import { create } from "zustand";

interface DeveloperState {
  currentBuffer: string;
  showFuzzyFinder: boolean;
  displayedLines: string[];
  isTyping: boolean;
  setCurrentBuffer: (buffer: string) => void;
  setShowFuzzyFinder: (show: boolean) => void;
  setDisplayedLines: (lines: string[]) => void;
  setIsTyping: (typing: boolean) => void;
}

export const useDeveloperStore = create<DeveloperState>((set) => ({
  currentBuffer: "README.md",
  showFuzzyFinder: false,
  displayedLines: [],
  isTyping: false,
  setCurrentBuffer: (buffer) => set({ currentBuffer: buffer }),
  setShowFuzzyFinder: (show) => set({ showFuzzyFinder: show }),
  setDisplayedLines: (lines) => set({ displayedLines: lines }),
  setIsTyping: (typing) => set({ isTyping: typing }),
}));
