import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import SmallerServicesContent from "./SmallerServicesContent";
import { useTranslation } from "react-i18next";

const serviceImages = [
  "uploads/img02.avif",
  "uploads/conunselling.jpg",
  "uploads/img3.jpeg",
  "uploads/img02.avif",
  "uploads/img7.jpeg",
  "uploads/img3.jpeg",
]; // repeat or update as needed

export default function ServicesContent() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translatedSections = t("services.servicesContent.sections", {
    returnObjects: true,
  });

  const sections = translatedSections.map((section, index) => ({
    id: `section-${index + 1}`,
    ...section,
    image: serviceImages[index % serviceImages.length],
  }));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) return;

    setSectionProgress(new Array(sections.length).fill(0));

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionHeight = 1 / sections.length;
      const adjustedProgress = Math.min(latest * 1.01, 1);
      const currentSection = Math.min(
        Math.floor(adjustedProgress / sectionHeight),
        sections.length - 1
      );
      setActiveSection(currentSection);

      const newProgress = sections.map((_, index) => {
        const sectionStart = index * sectionHeight;
        const sectionEnd = (index + 1) * sectionHeight;

        if (adjustedProgress < sectionStart) return 0;
        if (adjustedProgress > sectionEnd) return 1;

        return (adjustedProgress - sectionStart) / sectionHeight;
      });

      setSectionProgress(newProgress);
    });

    return () => unsubscribe();
  }, [scrollYProgress, windowWidth, sections.length]);

  if (windowWidth < 1024) {
    return <SmallerServicesContent sections={sections} />;
  }

  return (
    <section className="relative bg-white text-black">
      <div ref={containerRef} className="h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-9xl mx-auto flex flex-col md:flex-row">
            {/* Left */}
            <div className="w-full md:w-full px-16 md:pt-8">
              <h2 className="text-4xl font-bold my-10 text-black capitalize">
                {t("services.proven.heading1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                  {t("services.proven.heading2")}
                </span>{" "}
                {t("services.proven.heading3")}
              </h2>

              <div className="relative pl-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    animate={{ opacity: index === activeSection ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 relative"
                  >
                    <div className="relative">
                      <div className="absolute left-[-1.15rem] top-0 bottom-0 w-1">
                        <motion.div
                          className="w-full bg-amber-400 rounded-full"
                          style={{
                            height: "100%",
                            scaleY: sectionProgress[index],
                            originY: 0,
                          }}
                        />
                      </div>

                      <h3
                        className={`pl-5 text-2xl font-bold transition-transform ${
                          index === activeSection
                            ? "scale-105 text-black"
                            : "scale-95 text-gray-400"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: index === activeSection ? "auto" : 0,
                          opacity: index === activeSection ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-5 pr-2 text-lg text-black">
                          {section.content}
                        </div>
                        <div className="border-l-4 border-amber-400 pl-4 ml-6 font-extralight italic">
                          {section.conv}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <div className="relative h-[500px] lg:h-[600px] mt-16 rounded-lg overflow-hidden shadow-lg">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.02, zIndex: 0 }}
                    animate={{
                      opacity: index === activeSection ? 1 : 0,
                      scale: index === activeSection ? 1 : 1.02,
                      zIndex: index === activeSection ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
