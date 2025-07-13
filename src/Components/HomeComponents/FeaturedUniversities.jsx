import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { div } from "framer-motion/client";
import { useTranslation } from "react-i18next";
// Mock images

const img1 = "/uploads/img02.avif";
const img2 = "/uploads/img5.jpeg";
const img3 = "/uploads/img5.jpeg";

const listOfUni = [
  { name: "Nagoya University", logo: img1 },
  { name: "University of Tokyo", logo: img2 },
  { name: "Kyoto University", logo: img3 },
  { name: "Osaka University", logo: img1 },
  { name: "Tokyo Institute of Technology", logo: img2 },
  { name: "Waseda University", logo: img3 },
  { name: "Keio University", logo: img1 },
  { name: "Tohoku University", logo: img2 },
];

export default function FeaturedUniversities() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const carouselRef = useRef(null);

  // Create multiple copies for seamless infinite scroll
  const extendedList = [...listOfUni, ...listOfUni, ...listOfUni];

  // Calculate dimensions
  const itemWidth = 136; // 120px width + 16px gap
  const originalSetWidth = listOfUni.length * itemWidth;

  useEffect(() => {
    // Start continuous animation
    controls.start({
      x: [0, -originalSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        },
      },
    });
  }, [controls, originalSetWidth]);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 relative">
        <motion.div
          className="text-center text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("home.uni.heading")}
        </motion.div>

        <motion.p
          className="text-center max-w-4xl mx-auto font-extralight mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("home.uni.subheading")}
        </motion.p>

        <div className="overflow-hidden w-full relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-white to-transparent" />

          <motion.div
            className="flex gap-4"
            ref={carouselRef}
            animate={controls}
            style={{
              width: `${extendedList.length * itemWidth}px`,
              willChange: "transform",
            }}
          >
            {extendedList.map((uni, index) => (
              <div
                key={`${uni.name}-${index}`}
                className="flex flex-col items-center min-w-[120px] flex-shrink-0 py-6"
              >
                <div className="bg-amber-500 h-[100px] w-[100px] rounded-full overflow-hidden shadow-lg transform transition duration-300 hover:scale-110">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-center max-w-[100px] break-words line-clamp-3 leading-snug px-2">
                  {uni.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
