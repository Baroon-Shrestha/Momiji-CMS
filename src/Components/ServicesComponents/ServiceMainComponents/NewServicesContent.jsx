import React from "react";
import { useTranslation } from "react-i18next";

export default function NewServicesContent() {
  const { t } = useTranslation();
  const servicesData = t("services.types.typesdata", { returnObjects: true });

  return (
    <>
      <div className="container mx-auto px-4 pb-12" id="services-container">
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={service.id} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-6 transition-all duration-700 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="flex-1 lg:px-8">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] lg:h-[350px] object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 lg:px-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                        {index + 1}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl lg:text-2xl font-bold">
                          {service.title}
                        </div>
                        <div className="pt-2">
                          <div className="w-20 h-1 bg-gradient-to-r from-[#F05A22] via-[#F78C1F] to-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
