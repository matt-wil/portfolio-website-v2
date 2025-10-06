import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/usePortfolioStore";

// Define animation states using Variants
const panelVariants = {
  initial: { width: "50%" },
  selected: { width: "100%" },
  hidden: { width: "0%" },
};

const SplashScreen = () => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [selectedSide, setSelectedSide] = useState<"left" | "right" | null>(
    null,
  );
  const setCurrentPath = usePortfolioStore((state) => state.setCurrentPath);

  const handleSelect = (
    path: "developer" | "brutalist",
    side: "left" | "right",
  ) => {
    // Only set the selected side, no need for an 'isTransitioning' flag
    setSelectedSide(side);
  };

  return (
    <div className="fixed inset-0 flex overflow-hidden">
      {/* Left Side - Developer */}
      <motion.div
        className="relative flex cursor-pointer items-center justify-center border-0"
        style={{ backgroundColor: "hsl(var(--splash-bg))" }}
        variants={panelVariants}
        initial="initial"
        animate={
          selectedSide
            ? selectedSide === "left"
              ? "selected"
              : "hidden"
            : "initial"
        }
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        onMouseEnter={() => !selectedSide && setHoveredSide("left")}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        onClick={() => handleSelect("developer", "left")}
        // This callback fires AFTER the animation completes
        onAnimationComplete={() => {
          if (selectedSide === "left") {
            setCurrentPath("developer");
          }
        }}
      >
        <AnimatePresence>
          {!selectedSide && (
            <motion.div
              className="relative"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fade out the text when a side is selected
            >
              <motion.h1
                className="font-geometric text-[clamp(2.5rem,6vw,4.5rem)] uppercase"
                style={{ color: "hsl(var(--splash-fg))" }}
                animate={{
                  textShadow:
                    hoveredSide === "left"
                      ? "0 0 5px rgba(245, 245, 245, 0.5)"
                      : "0 0 0px rgba(245, 245, 245, 0)",
                }}
              >
                DEVELOPER?
                {hoveredSide === "left" && (
                  <span className="cursor-blink ml-1">▋</span>
                )}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right Side - Non-Developer */}
      <motion.div
        className="relative flex cursor-pointer items-center justify-center border-0"
        style={{ backgroundColor: "hsl(var(--splash-bg))" }}
        variants={panelVariants}
        initial="initial"
        animate={
          selectedSide
            ? selectedSide === "right"
              ? "selected"
              : "hidden"
            : "initial"
        }
        whileHover={{ backgroundColor: "hsl(var(--splash-accent))" }} // Cleaner hover
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        onMouseEnter={() => !selectedSide && setHoveredSide("right")}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        onClick={() => handleSelect("brutalist", "right")}
        onAnimationComplete={() => {
          if (selectedSide === "right") {
            setCurrentPath("brutalist");
          }
        }}
      >
        <AnimatePresence>
          {!selectedSide && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1
                className="font-geometric text-[clamp(2.5rem,6vw,4.5rem)] uppercase"
                style={{ color: "hsl(var(--splash-fg))" }}
              >
                NOT A DEVELOPER?
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
