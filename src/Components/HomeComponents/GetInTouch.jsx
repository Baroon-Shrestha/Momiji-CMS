import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import fm from "front-matter";
import toast from "react-hot-toast";

// Load contact markdown
const rawContact = import.meta.glob("/src/content/contact.md", {
  eager: true,
  as: "raw",
});
const { attributes } = fm(Object.values(rawContact)[0]);

export default function GetInTouch() {
  const { t } = useTranslation();

  const handleCallClick = () => {
    const phoneNumber = attributes.phone;

    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        toast.success("Phone number copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy phone number.");
      });
  };

  const handleEmailClick = () => {
    window.open(`mailto:${attributes.email}`, "_self");
  };

  const handleDirectionsClick = () => {
    window.open(attributes.map_link, "_blank");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="capitalize text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-center">
          {t("home.visit.heading")}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-96">
          {/* Left: Contact Info Card */}
          <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-[#FFFAE9] rounded-2xl p-8 shadow-lg border border-amber-200">
            <div className="text-3xl uppercase font-extrabold mb-8 flex items-center gap-3">
              <MessageCircle size={32} />
              {t("home.visit.heading2")}
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">{attributes.location}</p>
                    <button
                      onClick={handleDirectionsClick}
                      className="mt-2 flex items-center gap-1 text-amber-600 hover:text-amber-800 text-sm font-medium"
                    >
                      <Navigation size={14} />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}

              <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Call Us
                    </h3>
                    <button
                      onClick={handleCallClick}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-left"
                      title="Click to copy"
                    >
                      {attributes.phone}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Email Us
                    </h3>
                    <button
                      onClick={handleEmailClick}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                    >
                      {attributes.email}
                    </button>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Office Hours
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Sunday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium text-red-600">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.2585084732984!2d85.31832607491594!3d27.735762175431017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bbcdc2e83b%3A0x5e2236bb8d5f5b5!2sMomiji%20Academy!5e0!3m2!1sen!2snp!4v1750137174540!5m2!1sen!2snp"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-96"
            />

            <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={handleDirectionsClick}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                <Navigation size={16} />
                View in Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
