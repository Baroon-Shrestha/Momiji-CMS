import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5, // Delay before text starts appearing
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    scale: 1.1,
    opacity: 0.7,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.6,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AnimatedIntro() {
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show text after image loads
    const textTimer = setTimeout(() => setShowText(true), 500);

    // Start exit animation
    const exitTimer = setTimeout(() => setIsExiting(true), 4000);

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

            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              variants={overlayVariants}
            />

            {/* Text Content */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.h1
                    variants={textVariants}
                    className="text-6xl md:text-7xl font-bold mb-6 text-center tracking-wide"
                  >
                    Welcome
                  </motion.h1>

                  <motion.h2
                    variants={textVariants}
                    className="text-2xl md:text-3xl font-light mb-4 text-center"
                  >
                    to Our Experience
                  </motion.h2>

                  <motion.p
                    variants={textVariants}
                    className="text-lg md:text-xl text-center max-w-2xl px-6 opacity-90"
                  >
                    Where innovation meets excellence
                  </motion.p>

                  {/* Optional loading indicator */}
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
