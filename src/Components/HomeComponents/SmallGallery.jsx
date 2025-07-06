import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SmallGallery() {
  const { t } = useTranslation();
  const imageGrid = [
    ["uploads/img1.jpeg", "uploads/img2.jpeg", "uploads/img3.jpeg"],
    ["uploads/img1.jpeg", "uploads/img2.jpeg", "uploads/img3.jpeg"],
    ["uploads/img4.jpeg", "uploads/img5.jpeg", "uploads/img1.jpeg"],
    ["uploads/img4.jpeg", "uploads/img5.jpeg", "uploads/img1.jpeg"],
  ];

  return (
    <div className="min-h-screen bg-gray-100 rounded-4xl p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {t("home.gallery.heading")}
          </h1>
          <p className="text-gray-600 font-extralight text-xl max-w-2xl mx-auto capitalize">
            {t("home.gallery.subheading")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imageGrid.map((column, colIndex) => (
              <div key={colIndex} className="grid gap-4">
                {column.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Load More Button */}
        <Link to="/gallery">
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t("home.gallery.button")}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
