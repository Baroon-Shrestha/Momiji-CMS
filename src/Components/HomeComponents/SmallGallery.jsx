import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SmallGallery() {
  const { t } = useTranslation();

  // Flattened array for better grid control
  const images = [
    "uploads/img1.jpeg",
    "uploads/img2.jpeg",
    "uploads/img3.jpeg",
    "uploads/conunselling.jpg",
    "uploads/departure.jpg",
    "uploads/Event.jpg",
    "uploads/Farewell-Momiji.jpg",
    "uploads/img6.jpeg",
    "uploads/img7.jpeg",
    "uploads/Momiji-1.jpeg",
    "uploads/Momiji-21.jpg",
    "uploads/partner.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100 rounded-4xl p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {t("home.gallery.heading")}
          </h1>
          <p className="text-gray-600 font-extralight text-xl max-w-2xl mx-auto capitalize">
            {t("home.gallery.subheading")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105
                  ${index === 0 ? "col-span-2 row-span-2" : ""}
                  ${index === 4 ? "lg:col-span-2" : ""}
                  ${index === 7 ? "sm:col-span-2 lg:col-span-1" : ""}
                  ${index === 10 ? "xl:col-span-2" : ""}
                `}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <Link to="/gallery">
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              {t("home.gallery.button")}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
