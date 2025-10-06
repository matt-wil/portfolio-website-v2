import { create } from "zustand";

type PortfolioPath = "splash" | "developer" | "non-developer";

interface PortfolioState {
  currentPath: PortfolioPath;
  setCurrentPath: (path: PortfolioPath) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentPath: "splash",
  setCurrentPath: (path) => set({ currentPath: path }),
}));
