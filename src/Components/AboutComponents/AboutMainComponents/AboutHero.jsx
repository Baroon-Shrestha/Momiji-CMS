import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Play,
  Star,
  Users,
  Coffee,
  Award,
  GraduationCap,
} from "lucide-react";

import { MessageCircle, X, Minimize2 } from "lucide-react";

const heroImage = "uploads/img2.jpeg";
const coffeeImage2 =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop";
const coffeeImage3 =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const images = [heroImage, coffeeImage2, coffeeImage3];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: GraduationCap, value: "10K+", label: "Happy Students" },
    { icon: Users, value: "10+", label: "Expert Instructors" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="relative min-h-[50vh] overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/uploads/img2.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[50vh] flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                <div className="text-lg  md:text-lg font-light text-white">
                  About Us
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-5xl font-black  text-white">
                  Study, Learn & succeed with{" "}
                  <span className="text-[#F78C1F] leading-tight">Momiji </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Join thousands of coffee enthusiasts in our comprehensive
                  classes. From bean selection to brewing perfection, discover
                  the secrets that make exceptional coffee.
                </p>
              </div>

              {/* Buttons */}
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={images[activeImage]}
                  alt="Coffee class"
                  className="w-full h-80 lg:h-[400px] object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Overlay box */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <h3 className="text-white font-bold text-lg mb-2">
                      Interactive Learning
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, temporibus?
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-4 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-800 hover:text-red-600 z-10 bg-white rounded-full p-1"
            >
              <X size={24} />
            </button>

            <iframe
              src="/uploads/tryout.mp4"
              className="w-full h-[70vh] min-h-[400px]"
              allow="autoplay; fullscreen"
              title="Video Player"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
