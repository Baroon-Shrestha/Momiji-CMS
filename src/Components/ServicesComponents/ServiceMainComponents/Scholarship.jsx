import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Scholarship() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center flex-col my-12  rounded-4xl">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
              {t("services.scholarhship.heading")}
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-extralight">
              Unlock Scholarships and Financial Aid Opportunities to Support
              Your Dreams in Japan
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link to="/services/scholarship">
            <button className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300">
              {t("services.scholarhship.button")}
            </button>
          </Link>
          {/* <p className="text-gray-600 mt-4">
            Join thousands of students who achieved their Japanese university
            dreams
          </p> */}
        </div>
      </div>
    </>
  );
}
