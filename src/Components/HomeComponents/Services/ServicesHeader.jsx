import React from "react";
import { useTranslation } from "react-i18next";

export default function ServicesHeader() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-20">
      <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
        {t("home.services.heading")}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {t("home.services.subheading")}
      </p>
      <div className="flex justify-center mt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
      </div>
    </div>
  );
}
