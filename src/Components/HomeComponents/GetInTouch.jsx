import React from "react";
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

// Load contact markdown
const rawContact = import.meta.glob("/src/content/contact.md", {
  eager: true,
  as: "raw",
});
const { attributes } = fm(Object.values(rawContact)[0]);

export default function GetInTouch() {
  const { t } = useTranslation();

  const handleCallClick = () => {
    window.open(`tel:${attributes.phone}`, "_self");
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
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200"
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

          {/* Right: Embedded Google Map */}
          <div
            className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg"
            dangerouslySetInnerHTML={{ __html: attributes.map_embed }}
          />
        </div>
      </div>
    </>
  );
}
