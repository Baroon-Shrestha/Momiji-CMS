import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTeamContent } from "../../../Hooks/useTeamContent";
import { useRef } from "react";
export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { t } = useTranslation();
  const autoplayRef = useRef();

  // const teamMembers = t("home.team.members", { returnObjects: true });
  // const teamContent = useTeamContent();
  const { members: teamMembers = [] } = useTeamContent();

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Reset animation state after transition
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
      setIsAnimating(true);
    }, 4000);

    return () => clearInterval(autoplayRef.current);
  }, [teamMembers.length]);

  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const getVisibleCards = () => {
    const cards = [];

    if (!teamMembers || teamMembers.length === 0) return cards;

    for (let i = -2; i <= 2; i++) {
      const base = currentSlide ?? 0;
      const index = (base + i + teamMembers.length) % teamMembers.length;

      // Guard against invalid data
      const member = teamMembers[index];
      if (!member) continue;

      cards.push({
        ...member,
        position: i,
        index,
        key: `${index}-${member.name}`, // <- now guaranteed unique
      });
    }

    return cards;
  };

  return (
    // <div className="min-h bg-gradient-to-br from-gray-50 to-gray-100 py-16">
    <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-[#FFFAE9] rounded-4xl pt-12 mb-16 mx-6">
      <div className="container mx-auto px-4 relative">
        {/* Background Text */}
        <div className="absolute left-1/2  top-20 transform -translate-x-1/2 -translate-y-12 pointer-events-none">
          <span className="text-4xl hidden md:block md:text-[7rem] lg:text-[10rem] font-extrabold text-gray-200 opacity-20 select-none whitespace-nowrap text-shadow-lg">
            {t("home.team.bgheading")}
            {/* Our Team */}
          </span>
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-6 pb-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold bg-graient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text tet-transparent">
              {t("home.team.heading")}
            </h2>
          </div>
          <p className="max-w-3xl text-center text-lg text-ray-600 leading-relaxed">
            {t("home.team.subheading")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {/* Top-right Buttons Container */}
          <div className="flex justify-end items-center gap-2 mb-4 pr-8 relative z-20">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className={`bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 transition-all duration-300 border border-gray-100 ${
                isAnimating
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 hover:shadow-2xl active:scale-95"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className={`bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 transition-all duration-300 border border-gray-100 ${
                isAnimating
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 hover:shadow-2xl active:scale-95"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex items-center justify-center h-80 px-8 relative overflow-hidden">
            {getVisibleCards().map((member) => {
              const isCenter = member.position === 0;
              const isVisible = Math.abs(member.position) <= 1;
              const isClickable = !isCenter && !isAnimating && isVisible;

              return (
                <div
                  key={member.key}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isClickable
                      ? "cursor-pointer hover:scale-105"
                      : "cursor-default"
                  }`}
                  style={{
                    width: isCenter ? "90vw" : "80vw", // Use viewport width
                    maxWidth: isCenter ? "600px" : "480px",
                    height: isCenter ? "280px" : "240px",
                    transform: `translateX(${member.position * 320}px) scale(${
                      isCenter ? 1 : 0.9
                    })`,
                    opacity: isVisible ? (isCenter ? 1 : 0.7) : 0,
                    filter: isCenter
                      ? "brightness(1) saturate(1.1)"
                      : "brightness(0.9) saturate(0.8)",
                    zIndex: isCenter ? 20 : isVisible ? 10 : 1,
                  }}
                  // onClick={() => isClickable && goToSlide(member.index)}
                  onClick={() => openModal(member.index)}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                    <div className="flex h-full">
                      {/* Image Section */}
                      <div className="relative w-2/5 overflow-hidden">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10"></div>

                        {/* Role Badge */}
                      </div>

                      {/* Content Section */}
                      <div className="w-3/5 p-3 flex flex-col h-full">
                        <div className="flex-shrink-0 space-y-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            {member.name}
                          </h3>
                          <div className="">
                            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                              {member.role}
                            </span>
                          </div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                        </div>

                        <div className="flex-1 overflow-hidden">
                          <div
                            className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-gray-100 hover:scrollbar-thumb-amber-400"
                            style={{
                              scrollbarWidth: "thin",
                              scrollbarColor: "#fbbf24 #f3f4f6",
                            }}
                          >
                            <p className="text-gray-600 leading-relaxed text-[12px] md:text-sm">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="py-6 text-base md:text-xl capitalize text-center">
            click to view description
          </div>
        </div>
      </div>

      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <img
                src={teamMembers[selectedIndex].image}
                alt={teamMembers[selectedIndex].name}
                className="w-[40vh] h-full object-cover  shadow-lg rounded-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-0 p-4 right-5 text-red-700 hover:text-red-400"
              >
                <X size={30} />
              </button>

              <div className="text-left space-y-2 p-4">
                <h2 className="text-3xl font-bold text-[#701919]">
                  {teamMembers[selectedIndex].name}
                </h2>
                <h4 className="text-lg font-semibold text-[#D1863C]">
                  {teamMembers[selectedIndex].role}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {teamMembers[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 3px;
          transition: background-color 0.2s ease;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #fbbf24 #f3f4f6;
        }
      `}</style>
    </div>
  );
}
