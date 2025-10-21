"use client";

import { SplashPage } from "@/components/SplashPage";
import { DeveloperPath } from "@/paths/developer/DeveloperPath";
import { BrutalistPath } from "@/paths/brutalist/BrutalistPath";
import { usePathStore } from "@/store/pathStore";

export default function Page() {
  const currentPath = usePathStore((state) => state.currentPath);

  return (
    <>
      {currentPath === "splash" && <SplashPage />}
      {currentPath === "developer" && <DeveloperPath />}
      {currentPath === "designer" && <BrutalistPath />}
    </>
  );
}
