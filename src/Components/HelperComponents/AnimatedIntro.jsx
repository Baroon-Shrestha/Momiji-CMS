import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0.7 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.6,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnimatedIntro() {
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Commented out sessionStorage logic
    const alreadyVisited = sessionStorage.getItem("momijiIntroShown");

    if (!alreadyVisited) {
      sessionStorage.setItem("momijiIntroShown", "true");
    }

    const textTimer = setTimeout(() => setShowText(true), 500);
    const exitTimer = setTimeout(() => setIsExiting(true), 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            key="intro"
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full"
          >
            {/* Background Image */}
            <motion.img
              src="/uploads/img1.jpeg"
              alt="Intro"
              className="w-full h-full object-cover"
              variants={imageVariants}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              variants={overlayVariants}
            />

            {/* Text Content */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.h1
                    variants={textVariants}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide"
                  >
                    Welcome to <br /> Momiji International Academy
                  </motion.h1>

                  <motion.h2
                    variants={textVariants}
                    className="text-xl sm:text-2xl md:text-3xl font-light mb-4"
                  >
                    Study, Train, and Succeed with Momiji by your side.
                  </motion.h2>

                  <motion.p
                    variants={textVariants}
                    className="text-base sm:text-lg md:text-xl max-w-2xl opacity-90"
                  >
                    Start your wonderful journey to Japan with us.
                  </motion.p>

                  {/* Dots */}
                  <motion.div
                    variants={textVariants}
                    className="mt-8 flex space-x-2"
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
