import React from "react";
import {
  Target,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Plane,
  Home,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Motto() {
  const { t } = useTranslation();
  const services = t("services.motto.services", { returnObjects: true });

  return (
    <div className="min-h-scree py-16 ">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight capitalize">
            <span className="">{t("services.motto.heading1")} </span>
            <span className="text-gray-00">{t("services.motto.heading2")}</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-extralight">
              {t("services.motto.subheading")}
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-">
              <h2 className="text-2xl font-bold text-gray-800">
                {t("services.motto.servicehead")}
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-amber-200"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-300 transition-all duration-300">
                    <div className="text-amber-400 text-2xl md:text-3xl group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300 text-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-600">
                {t("services.motto.stats.students")}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">
                {t("services.motto.stats.success")}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">
                {t("services.motto.stats.uni")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
