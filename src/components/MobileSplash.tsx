// components/MobileSplash.tsx
"use client";

import { motion, steps } from "framer-motion";
import { useState } from "react";
import { usePathStore } from "@/store/pathStore";

export const MobileSplash = () => {
  const [selectedSide, setSelectedSide] = useState<
    "developer" | "designer" | null
  >(null);
  const setPath = usePathStore((state) => state.setPath);

  const handleClick = (side: "developer" | "designer") => {
    setSelectedSide(side);
  };

  const variants = {
    initial: { height: "50%" },
    selected: { height: "100%" },
    hidden: { height: "0%" },
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Developer Side (Top) */}
      <motion.div
        className="relative flex w-full cursor-pointer items-center justify-center bg-splash-bg"
        variants={variants}
        initial="initial"
        animate={
          selectedSide === null
            ? "initial"
            : selectedSide === "developer"
              ? "selected"
              : "hidden"
        }
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        onClick={() => handleClick("developer")}
        onAnimationComplete={() => {
          if (selectedSide === "developer") {
            setPath("developer");
          }
        }}
      >
        <h1 className="select-none text-center font-sans text-splash-heading font-bold uppercase tracking-tight text-splash-fg">
          DEVELOPER?
        </h1>
      </motion.div>

      {/* Designer Side (Bottom) */}
      <motion.div
        className="relative flex w-full cursor-pointer items-center justify-center"
        style={{ backgroundColor: "hsl(var(--brutalist-accent))" }}
        variants={variants}
        initial="initial"
        animate={
          selectedSide === null
            ? "initial"
            : selectedSide === "designer"
              ? "selected"
              : "hidden"
        }
        transition={{ duration: 0.01, type: "tween", ease: "linear" }}
        onClick={() => handleClick("designer")}
        onAnimationComplete={() => {
          if (selectedSide === "designer") {
            setPath("designer");
          }
        }}
      >
        <motion.h1
          className="select-none whitespace-nowrap text-center font-sans text-splash-heading font-bold uppercase leading-none tracking-tight"
          style={{ color: "hsl(var(--brutalist-bg))" }}
        >
          NOT
          <br />
          A
          <br />
          DEVELOPER?
        </motion.h1>
      </motion.div>
    </div>
  );
};
