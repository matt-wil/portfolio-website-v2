import { create } from "zustand";

export type PathType = "splash" | "developer" | "designer";

interface PathStore {
  currentPath: PathType;
  setPath: (path: PathType) => void;
}

export const usePathStore = create<PathStore>((set) => ({
  currentPath: "splash",
  setPath: (path) => set({ currentPath: path }),
}));
