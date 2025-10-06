"use client";

import SplashPage from "@/components/splash/SplashPage";
import BrutalistPortfolio from "@/components/paths/brutalist/BrutalistPortfolio";
import DeveloperPortfolio from "@/components/paths/developer/DeveloperPortfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function Home() {
  const currentPath = usePortfolioStore((state) => state.currentPath);

  return (
    <>
      {currentPath === "splash" && <SplashPage />}
      {currentPath === "developer" && <DeveloperPortfolio />}
      {currentPath === "brutalist" && <BrutalistPortfolio />}
    </>
  );
}
