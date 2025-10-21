"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathStore } from "@/store/pathStore";

export const SplashPage = () => {
  const [hoveredSide, setHoveredSide] = useState<
    "developer" | "designer" | null
  >(null);
  const [selectedSide, setSelectedSide] = useState<
    "developer" | "designer" | null
  >(null);
  const setPath = usePathStore((state) => state.setPath);

  const handleClick = (side: "developer" | "designer") => {
    setSelectedSide(side);
  };

  const variants = {
    initial: { width: "50%" },
    selected: { width: "100%" },
    hidden: { width: "0%" },
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Developer Side */}
      <motion.div
        className="relative flex h-full cursor-pointer items-center justify-center bg-splash-bg"
        variants={variants}
        initial="initial"
        animate={
          selectedSide === null
            ? "initial"
            : selectedSide === "developer"
              ? "selected"
              : "hidden"
        }
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        onHoverStart={() => setHoveredSide("developer")}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick("developer")}
        onAnimationComplete={() => {
          if (selectedSide === "developer") {
            setPath("developer");
          }
        }}
      >
        <div className="relative">
          <motion.h1
            className="select-none font-sans text-splash-heading font-bold uppercase tracking-tight text-splash-fg"
            whileHover={{
              textShadow: "0 0 30px rgba(245, 245, 245, 0.4)",
            }}
          >
            DEVELOPER?
          </motion.h1>
          {hoveredSide === "developer" && (
            <motion.span
              className="ml-1 inline-block text-splash-fg"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ▋
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Designer Side */}
      <motion.div
        className="relative flex h-full cursor-pointer items-center justify-center"
        style={{ backgroundColor: "hsl(var(--splash-bg))" }}
        variants={variants}
        initial="initial"
        animate={
          selectedSide === null
            ? "initial"
            : selectedSide === "designer"
              ? "selected"
              : "hidden"
        }
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        onHoverStart={() => setHoveredSide("designer")}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick("designer")}
        whileHover={{ backgroundColor: "hsl(var(--splash-accent))" }}
        onAnimationComplete={() => {
          if (selectedSide === "designer") {
            setPath("designer");
          }
        }}
      >
        <h1 className="select-none font-sans text-splash-heading font-bold uppercase tracking-tight text-splash-fg">
          NOT A DEVELOPER?
        </h1>
      </motion.div>
    </div>
  );
};
