import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Camera,
  Phone,
  Target,
  Award,
  Heart,
  Building,
  Lightbulb,
  Headphones,
  User,
} from "lucide-react";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Changed from 768 to 1024 for tablet support
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="shadow-xl sticky top-0 z-50 backdrop-blur-md transition-all duration-500 ease-in-out bg-white/95 text-orange-500">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="group">
            <img
              src="/uploads/imp/logo2.png"
              alt=""
              className="h-[7vh] md:h-[10vh] transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation - Now shows only on lg screens and up */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  isActive
                    ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:bg-orange-500"
                    : "text-orange-500 hover:text-orange-700 hover:bg-orange-50"
                }`
              }
              style={{
                color: (isActive) => (isActive ? "#FF8B0F" : "#FF8B0F"),
              }}
            >
              <Home
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {t("nav.home")}
            </NavLink>

            {/* Desktop About with Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <NavLink
                to="/about"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group whitespace-nowrap ${
                    isActive
                      ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:bg-orange-500"
                      : "text-orange-500 hover:text-orange-700 hover:bg-orange-50"
                  }`
                }
                style={{ color: "#FF8B0F" }}
              >
                <Users
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {t("nav.about")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </NavLink>

              {/* Desktop About Dropdown Menu */}
              <div
                className={`absolute top-full -left-5 mt-3  w-64 bg-white text-gray-800 rounded-2xl shadow-2xl border transition-all duration-300 ease-out transform origin-top ${
                  aboutDropdownOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
                style={{ borderColor: "#FF8B0F" }}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <div className="py-4">
                  <NavLink
                    to="/about/vision"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <Target
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.visionhead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.visionsubhead")}
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/about/team"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <Award
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.teamhead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.teamsubhead")}
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/about/ceo"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <Heart
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.ceohead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.ceosubhead")}
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/about/coordinator"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <User
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.co_head")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.co_subhead")}
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  isActive
                    ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:bg-orange-500"
                    : "text-orange-500 hover:text-orange-700 hover:bg-orange-50"
                }`
              }
              style={{ color: "#FF8B0F" }}
            >
              <Camera
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {t("nav.gallery")}
            </NavLink>

            {/* Desktop Services with Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <NavLink
                to="/services"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group whitespace-nowrap ${
                    isActive
                      ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:bg-orange-500"
                      : "text-orange-500 hover:text-orange-700 hover:bg-orange-50"
                  }`
                }
                style={{ color: "#FF8B0F" }}
              >
                <Briefcase
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {t("nav.service")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </NavLink>

              {/* Desktop Services Dropdown Menu */}
              <div
                className={`absolute top-full -left-10 mt-3 w-64 bg-white text-gray-800 rounded-2xl shadow-2xl border transition-all duration-300 ease-out transform origin-top ${
                  servicesDropdownOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
                style={{ borderColor: "#FF8B0F" }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-4">
                  <NavLink
                    to="/services/consulting"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <Lightbulb
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.consulthead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.consultsubhead")}
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/services/scholarship"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 border-b border-gray-100 group"
                  >
                    <Award
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.scholarhead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.scholarsubhead")}
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/services/faq"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 group"
                  >
                    <Headphones
                      size={20}
                      className="group-hover:text-orange-600 transition-colors duration-200"
                      style={{ color: "#FF8B0F" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-gray-900 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.faqhead")}
                      </div>
                      <div
                        className="text-sm text-gray-500 group-hover:transition-colors duration-200"
                        style={{ color: "#FF8B0F" }}
                      >
                        {t("nav.faqsubhead")}
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 border-2 shadow-lg hover:shadow-xl transform hover:scale-105 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 border-orange-600 hover:border-orange-700 whitespace-nowrap"
              style={{
                backgroundColor: "#FF8B0F",
                color: "white",
                borderColor: "#FF8B0F",
              }}
            >
              <Phone size={18} />
              {t("nav.contact")}
            </NavLink>
          </div>

          {/* Mobile/Tablet Hamburger - Now shows on tablet and mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-orange-50"
            style={{ color: "#FF8B0F" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu - Now shows on tablet and mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive
                    ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-1 after:left-4 after:w-8 after:h-0.5 after:rounded-full after:bg-orange-600"
                    : "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                }`
              }
              style={{ color: "#FF8B0F" }}
            >
              <Home size={18} />
              {t("nav.home")}
            </NavLink>

            {/* Mobile/Tablet About */}
            <div>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                style={{ color: "#FF8B0F" }}
              >
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span>{t("nav.about")}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  aboutDropdownOpen
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 mt-2 space-y-1">
                  <NavLink
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Users size={16} />
                    {t("nav.about")}
                  </NavLink>
                  <NavLink
                    to="/about/vision"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Target size={16} />
                    {t("nav.visionhead")}
                  </NavLink>
                  <NavLink
                    to="/about/team"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Award size={16} />
                    {t("nav.teamhead")}
                  </NavLink>
                  <NavLink
                    to="/about/ceo"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Heart size={16} />
                    {t("nav.ceohead")}
                  </NavLink>
                  <NavLink
                    to="/about/coordinator"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <User size={16} />
                    {t("nav.co_head")}
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Services */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                style={{ color: "#FF8B0F" }}
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={18} />
                  <span>{t("nav.service")}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  servicesDropdownOpen
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 mt-2 space-y-1">
                  <NavLink
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Briefcase size={16} />
                    {t("nav.service")}
                  </NavLink>
                  <NavLink
                    to="/services/consulting"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Lightbulb size={16} />
                    {t("nav.consulthead")}
                  </NavLink>
                  <NavLink
                    to="/services/scholarship"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Award size={16} />
                    {t("nav.scholarhead")}
                  </NavLink>
                  <NavLink
                    to="/services/faq"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    style={{ color: "#FF8B0F" }}
                  >
                    <Headphones size={16} />
                    {t("nav.faqhead")}
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive
                    ? "text-orange-700 bg-orange-50 after:content-[''] after:absolute after:bottom-1 after:left-4 after:w-8 after:h-0.5 after:rounded-full after:bg-orange-600"
                    : "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                }`
              }
              style={{ color: "#FF8B0F" }}
            >
              <Camera size={18} />
              {t("nav.gallery")}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 px-4 py-3 mt-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg transform hover:scale-105 text-white hover:bg-orange-700"
              style={{ backgroundColor: "#FF8B0F" }}
            >
              <Phone size={18} />
              {t("nav.contact")}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
