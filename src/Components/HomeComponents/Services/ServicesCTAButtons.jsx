import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesCTAButtons() {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-20">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4">
        <Link to="/services">
          <button className="px-8 py-4 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-500 transform hover:scale-105 transition-all duration-200 ease-out shadow-lg hover:shadow-xl">
            {t("home.services.buttons.explore")}
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out">
            {t("home.services.buttons.contact")}
          </button>
        </Link>
      </div>
    </div>
  );
}
