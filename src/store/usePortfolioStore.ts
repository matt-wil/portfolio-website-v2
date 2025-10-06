import { create } from "zustand";

type PortfolioPath = "splash" | "developer" | "brutalist";

interface PortfolioState {
  currentPath: PortfolioPath;
  setCurrentPath: (path: PortfolioPath) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentPath: "splash",
  setCurrentPath: (path) => set({ currentPath: path }),
}));
