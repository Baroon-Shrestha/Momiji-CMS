import React from "react";
import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
// import footImg from "../assets/Images/img9.jpeg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const handleCallClick = () => {
    window.open("tel:+977-98XXXXXXXX", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:momijiinepal@gmail.com", "_self");
  };

  return (
    <>
      <div className="bg-slate-800 ">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 py-6 mx-3">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-white">
                {t("momiji.head")}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer bg-blue-600 p-2 text-white rounded-full hover:text-blue-600 hover:bg-blue-200 transition-colors">
                  <Facebook size={20} />
                </div>
                <div className="flex items-center gap-2 cursor-pointer text-white bg-green-600 p-2 rounded-full hover:text-green-600 hover:bg-green-200 transition-colors">
                  <MessageCircle size={20} />
                </div>
              </div>
            </div>
            <hr className="border-gray-500" />
            <div className="flex items-center justify-between flex-col md:flex-row gap-4">
              <div className="max-w-lg">
                <h3 className="font-semibold mb-2 text-white">
                  {t("nav.about")}
                </h3>
                <p className="text-gray-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque est repellat amet a reprehenderit rerum aut similique,
                  architecto, alias earum consectetur consequatur beatae
                  voluptates sit repellendus voluptas magni molestiae facilis?
                </p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="list-none">
                  <p className="font-semibold mb-2 text-white">
                    {t("nav.quick")}
                  </p>
                  <Link to="/about">
                    <li className="mb-1 cursor-pointer hover:text-amber-400 transition-colors text-gray-300">
                      {t("nav.about")}
                    </li>
                  </Link>
                  <Link to="/gallery">
                    <li className="mb-1 cursor-pointer hover:text-amber-400 transition-colors text-gray-300">
                      {t("nav.gallery")}
                    </li>
                  </Link>
                  <Link to="/services">
                    <li className="mb-1 cursor-pointer hover:text-amber-400 transition-colors text-gray-300">
                      {t("nav.service")}
                    </li>
                  </Link>
                </div>
                <div className="list-none">
                  <p className="font-semibold mb-2 text-white">
                    {t("nav.touch")}
                  </p>
                  <li className="mb-1 flex items-center gap-2 text-gray-300">
                    <Phone size={16} />
                    <span>+977 98XXXXXXXX</span>
                  </li>
                  <li
                    className="mb-1 flex items-center gap-2 text-gray-300"
                    onClick={handleEmailClick}
                  >
                    <Mail size={16} />
                    <span>momijiinepal@gmail.com</span>
                  </li>
                  <li className="mb-1 flex items-center gap-2 text-gray-300">
                    <MapPin size={16} />
                    <span>SamaKhusi-10, Kathmandu</span>
                  </li>
                </div>
              </div>
            </div>
            <div className="text-center text-md font-extralight pb-10 text-gray-400">
              &copy; by Momiji International Academy
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[40vh] relative">
        <div className="bg-black/60 absolute z-50 opacity-50"></div>
        <img
          src="/uploads/img9.jpeg"
          alt=""
          className="object-cover  h-full w-full"
        />

        <div className="absolute -top-15 w-[90vw] left-6 md:left-20">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2 text-lg">
              {t("footer.cta.heading")}
            </h3>
            <p className="text-sm text-amber-100 mb-4">
              {t("footer.cta.subheading")}
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleCallClick}
                className="bg-white text-amber-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors duration-200"
              >
                {t("footer.cta.buttons.call")}
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors duration-200"
              >
                {t("footer.cta.buttons.email")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
