import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFlask,
  FaUsers,
} from "react-icons/fa";
import { MdSchool, MdQuiz } from "react-icons/md";
import ServiceCard from "../../HomeComponents/Services/ServiceCard";
import ServicesHeader from "../../HomeComponents/Services/ServicesHeader";
import { MessageSquareQuote, Newspaper, School } from "lucide-react";

export default function CoreServices() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const { t } = useTranslation();

  const serviceIcons = [
    {
      icon: <MessageSquareQuote />,
      color: "from-indigo-500 to-purple-600",
      accent: "#6366f1",
    },
    {
      icon: <FaBook />,
      color: "from-emerald-500 to-teal-600",
      accent: "#10b981",
    },
    {
      icon: <School />,
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
    },
    {
      icon: <FaLaptopCode />,
      color: "from-violet-500 to-purple-600",
      accent: "#8b5cf6",
    },
    {
      icon: <Newspaper />,
      color: "from-red-500 to-pink-600",
      accent: "#ef4444",
    },
    {
      icon: <MdSchool />,
      color: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
    },
    {
      icon: <FaUsers />,
      color: "from-lime-500 to-green-600",
      accent: "#84cc16",
    },
    {
      icon: <MdQuiz />,
      color: "from-orange-500 to-red-600",
      accent: "#f97316",
    },
  ];

  const serviceContent = t("home.services.items", { returnObjects: true });
  const services = serviceContent.map((item, index) => ({
    ...item,
    ...serviceIcons[index],
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document
      .querySelectorAll(".service-card")
      .forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              visible={visibleCards.includes(index)}
              hovered={hoveredCard}
              onHover={setHoveredCard}
              onLeave={() => setHoveredCard(null)}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
