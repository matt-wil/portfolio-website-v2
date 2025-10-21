"use client";

import { motion, steps } from "framer-motion";
import { useState } from "react";
import { usePathStore } from "@/store/pathStore";
import { TypingText } from "@/components/developer/TypingText";
import { MobileSplash } from "./MobileSplash";

const codeSnippet = `const checkIfDeveloper = (understands: boolean): void => {
  if (understands === true) {
    return enter();
  }
};`;

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
    <>
      <div className="md:hidden">
        <MobileSplash />
      </div>
      <div className="hidden md:flex h-screen w-screen overflow-hidden">
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
          <div className="relative flex flex-col items-center text-center">
            {" "}
            <motion.h1
              className="select-none font-sans text-splash-heading font-bold uppercase tracking-tight text-splash-fg"
              whileHover={{
                textShadow: "0 0 30px rgba(245, 245, 245, 0.4)",
              }}
            >
              ENTER_VIM
            </motion.h1>
            {hoveredSide === "developer" && (
              <TypingText
                key={hoveredSide}
                text={codeSnippet}
                className="ml-4 font-mono text-xl text-dev-green" // Style as code
                speed={50}
              />
            )}
            {hoveredSide !== "developer" && (
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
          className="relative flex h-full cursor-pointer items-center justify-center overflow-hidden"
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
          transition={{ duration: 0.01, type: "tween", ease: "linear" }}
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
          {/* Wrapper for text animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{
              scale: 2.5,
              rotate: -25,
              transition: {
                type: "tween",
                duration: 0.25,
                ease: steps(3, "end"),
              },
            }}
          >
            <motion.h1
              className="select-none whitespace-nowrap text-center font-sans text-splash-heading font-bold uppercase leading-none tracking-tight text-splash-fg"
              initial={{ opacity: 1 }}
              animate={{
                opacity: selectedSide === "designer" || !selectedSide ? 1 : 0,
              }}
              transition={{ duration: 0.01, ease: "linear" }}
            >
              {/* Split text onto multiple lines */}
              ENTER
              <br />
              WEBSITE
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
