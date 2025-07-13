import React from "react";
import { useTranslation } from "react-i18next";

export default function CEO() {
  const { t } = useTranslation();
  return (
    <div className="">
      <section className="relative w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
        {/* Optional background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80"
            alt="vision background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {t("ceo.heading")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-extralight">
            {t("ceo.subheading")}
          </p>
        </div>
      </section>

      {/* Enhanced Layout with Text Wrapping */}
      <div className="relative container mx-auto my-16 px-4">
        {/* CEO Name and Title - Positioned at top */}
        <div className="mb-8">
          <div className="text-4xl font-extrabold text-gray-800 border-l-8 border-amber-400 pl-6 mb-2">
            Jitendra Shrestha
          </div>
          <div className="text-2xl font-light text-amber-600 pl-6">
            Chief Executive Officer
          </div>
        </div>

        {/* CEO Image - Floated to create text wrap */}
        <div className="float-left w-80 h-96 mr-8 mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="/uploads/CEO.jpg"
            alt="CEO Jitendra"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content with Enhanced Styling */}
        <div className="text-justify text-gray-700 leading-relaxed space-y-6">
          {/* First paragraph with drop cap */}
          <p className="text-lg">
            Welcome to Momijij International Academy! We are truly delighted to
            have you explore our services, designed to support students aspiring
            to study and work in Japan. As the CEO of this esteemed consultancy,
            I would like to personally extend a warm welcome and share a brief
            insight into our vision, values, and working process.
          </p>

          <p className="text-lg">
            Our consultancy has been dedicated to offering exceptional guidance
            to students who are eager to embark on their academic and
            professional journey in Japan. We have built our reputation on a
            foundation of trust, reliability, and unparalleled expertise in
            Japanese language training, career counseling, and visa processing.
            Our goal is to not only help students get the necessary academic
            qualifications but also immerse them in the rich cultural landscape
            of Japan, making their transition smoother and more successful.
          </p>

          <p className="text-lg">
            At Momijij International Academy, we believe that education is not
            just about acquiring knowledge—it’s about shaping an individual’s
            future. Our holistic approach ensures that every student receives
            personalized attention, from selecting the right educational
            institution to navigating through the complex visa application
            process. We also offer cultural workshops and language classes to
            ensure students are fully prepared for their life in Japan, both
            academically and socially.
          </p>

          <p className="text-lg">
            Our dedicated team of professionals is committed to providing
            continuous support to every student throughout their journey.
            Whether it’s through our counseling sessions, application
            assistance, or post-arrival support in Japan, we are always with you
            every step of the way. We strive to make each student feel confident
            and capable as they pursue their dreams in a new country.
          </p>

          <p className="text-lg">
            Thank you for choosing Momijij International Academy as your partner
            in this exciting new chapter of your life. We look forward to
            helping you succeed in your educational endeavors and beyond!
          </p>

          {/* Contact Info with Enhanced Styling */}
          <div className="clear-both pt-8 mt-8 border-t border-amber-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:info@momijij.com"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  info@momijij.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-6 bg-amber-300"></div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span className="font-medium">WhatsApp:</span>
                <a
                  href="tel:+97797"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  +977 97*******
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
