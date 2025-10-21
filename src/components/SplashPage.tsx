"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathStore } from "@/store/pathStore";
import { TypingText } from "@/components/developer/TypingText";

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
        <div className="relative flex flex-col items-center text-center">
          {" "}
          {/* Use flex here */}
          <motion.h1
            className="select-none font-sans text-splash-heading font-bold uppercase tracking-tight text-splash-fg"
            whileHover={{
              textShadow: "0 0 30px rgba(245, 245, 245, 0.4)",
            }}
          >
            DEVELOPER?
          </motion.h1>
          {/* Conditionally render TypingText on hover */}
          {hoveredSide === "developer" && (
            <TypingText
              // Key changes on hover state change, forcing remount & restart
              key={hoveredSide}
              text={codeSnippet}
              className="ml-4 font-mono text-xl text-cat-green" // Style as code
              speed={50} // Adjust speed as needed
            />
          )}
          {/* Show blinking cursor only when NOT hovered */}
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
        {/* Wrapper for text animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{
            scale: 2.5,
            rotate: -25,
            transition: { type: "spring", stiffness: 200, damping: 20 },
          }}
        >
          <motion.h1
            className="select-none whitespace-nowrap text-center font-sans text-splash-heading font-bold uppercase leading-none tracking-tight text-splash-fg"
            initial={{ opacity: 1 }}
            animate={{
              opacity: selectedSide === "designer" || !selectedSide ? 1 : 0,
            }}
          >
            {/* Split text onto multiple lines */}
            NOT
            <br />
            A
            <br />
            DEVELOPER?
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
};
