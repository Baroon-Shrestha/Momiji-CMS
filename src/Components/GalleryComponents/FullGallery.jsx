import matter from "gray-matter";
import { useTranslation } from "react-i18next";
import LazyMotionItem from "../HelperComponents/LazyMotionItem";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import fm from "front-matter";
export default function FullGallery() {
  const [layoutType] = useState("improved-masonry");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { t } = useTranslation();

  // 👇 Load all markdown files in gallery
  const markdownFiles = import.meta.glob("/src/content/gallery/*.md", {
    eager: true,
    as: "raw",
  });

  const mediaFiles = Object.entries(markdownFiles).map(([path, raw]) => {
    const { attributes } = fm(raw);
    return {
      src: attributes.image,
      alt: attributes.alt || "",
      title: attributes.title || "",
      type: attributes.image.endsWith(".mp4") ? "video" : "image",
    };
  });
  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => {
    setSelectedIndex(null);
    setIsModalOpen(false);
  };
  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % mediaFiles.length);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev === 0 ? mediaFiles.length - 1 : prev - 1));

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const renderImprovedMasonry = () => {
    const columns = [[], [], [], []];
    mediaFiles.forEach((file, i) => {
      const shortestIndex = columns.reduce(
        (minIndex, col, index, arr) =>
          col.length < arr[minIndex].length ? index : minIndex,
        0
      );
      columns[shortestIndex].push({ ...file, index: i });
    });

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            {column.map((file) => (
              <div
                key={file.index}
                className="cursor-pointer"
                onClick={() => openModal(file.index)}
              >
                <LazyMotionItem type={file.type} src={file.src} />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="relative w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80"
            alt="vision background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {t("gallery.heading")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-extralight">
            {t("gallery.subheading")}
          </p>
        </div>
      </section>

      <div className="container mx-auto my-20 px-4 md:px-0">
        {layoutType === "improved-masonry" && renderImprovedMasonry()}
        <div className="text-2xl font-extralight text-center my-8">
          {t("gallery.footer")}
        </div>
      </div>

      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100 p-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white hover:text-red-400"
          >
            <X size={30} />
          </button>
          <button
            onClick={prevMedia}
            className="absolute left-5 text-white hover:scale-110"
          >
            <ChevronLeft size={40} />
          </button>
          <div className="max-w-5xl max-h-[90vh] mx-auto">
            {mediaFiles[selectedIndex].type === "image" ? (
              <img
                src={mediaFiles[selectedIndex].src}
                alt={mediaFiles[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded"
              />
            ) : (
              <video
                src={mediaFiles[selectedIndex].src}
                controls
                className="max-w-full max-h-[90vh] rounded"
              />
            )}
          </div>
          <button
            onClick={nextMedia}
            className="absolute right-5 text-white hover:scale-110"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
