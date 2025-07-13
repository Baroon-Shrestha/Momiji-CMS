import React from "react";
import { useTranslation } from "react-i18next";

export default function Coordinator() {
  const { t } = useTranslation();
  const image = "/uploads/imp/Nista.jpeg";
  return (
    <div className="">
      <section className="relative w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
        {/* Optional background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/CEO.jpg"
            alt="vision background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {t("coordinator.heading")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-extralight">
            {t("coordinator.subheading")}
          </p>
        </div>
      </section>

      {/* Enhanced Layout with Text Wrapping */}
      <div className="relative container mx-auto my-16 px-4">
        {/* Coordinator Name and Title - Positioned at top */}
        <div className="mb-8">
          <div className="text-4xl font-extrabold text-gray-800 border-l-8 border-amber-400 pl-6 mb-2">
            Nista Dangol
          </div>
          <div className="text-2xl font-light text-amber-600 pl-6">
            Coordination Officer
          </div>
        </div>

        {/* Coordinator Image - Floated to create text wrap */}
        <div className="float-right w-80 h-96 ml-8 mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="Coordinator"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content with Enhanced Styling */}
        <div className="text-justify text-gray-700 leading-relaxed space-y-6">
          {/* First paragraph with drop cap */}
          <p className="text-lg">
            As the Coordination Officer at Momijij International Academy, my
            role is to ensure that every aspect of the student’s journey to
            Japan runs smoothly. From handling documentation to ensuring
            students receive the best academic counseling, I am here to make
            sure they are fully prepared for their educational adventure. Our
            team works tirelessly to help students integrate into their new
            environment in Japan while also focusing on their academic success.
          </p>

          <p className="text-lg">
            At Momijij, we understand the complexities of studying abroad,
            especially in a culturally unique environment like Japan. Our goal
            is to make the entire process—from application to post-arrival
            support—seamless for our students. We guide them through each step
            with care and expertise to ensure they have the best chance of
            succeeding in their academic pursuits and adapting to life in Japan.
          </p>

          <p className="text-lg">
            My mission is to provide personalized support to each student,
            helping them navigate the administrative processes while also
            offering cultural and emotional support. Japan is not just an
            academic destination, it’s a place for personal growth and
            transformation, and it is my pleasure to assist students in becoming
            confident global citizens.
          </p>

          <p className="text-lg">
            The coordination office ensures that students receive all the
            necessary information and guidance, whether it is related to
            accommodation, documentation, or even cultural immersion programs.
            We offer ongoing support and monitor students’ progress to make sure
            that their experience in Japan is enriching, rewarding, and
            successful.
          </p>

          <p className="text-lg">
            We value the trust that our students place in us, and it is our
            commitment to ensure they receive the highest quality support
            possible. I look forward to continuing to help students grow, both
            academically and personally, and to be a part of their successful
            journey in Japan.
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
