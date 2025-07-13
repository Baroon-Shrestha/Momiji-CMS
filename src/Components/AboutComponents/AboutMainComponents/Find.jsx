import React from "react";

import { div } from "framer-motion/client";

const cardData = [
  {
    id: 1,
    image: "/uploads/img10.jpeg",
    icon: "🗣️",
    title: "Japanese Language Mastery",
    description:
      "Build fluency in spoken and written Japanese through structured lessons, JLPT-focused training, and practical conversation exercises designed to boost confidence and comprehension.",
  },
  {
    id: 2,
    image: "/uploads/img10.jpeg",
    icon: "🎎",
    title: "Cultural Immersion Program",
    description:
      "Dive into authentic Japanese culture with workshops, etiquette sessions, and seasonal activities. From tea ceremonies to local festivals, get hands-on cultural experiences.",
  },
  {
    id: 3,
    image: "/uploads/img10.jpeg",
    icon: "💼",
    title: "Career & Study Pathway",
    description:
      "Plan your future in Japan with expert guidance. Explore job placement assistance, vocational pathways, and university admissions tailored to your long-term goals.",
  },
];

export default function Find() {
  return (
    <div className="my-16">
      <div className="container mx-auto px-4 py-8">
        <div>
          {/* Header Section */}
          <div className="flex flex-col gap-4 items-center justify-around mb-12 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-bold mb-4 md:mb-0">
              Start your journey
            </div>
            <div className="text-lg font-extralight max-w-4xl text-center text-gray-700 leading-relaxed">
              Find yourself in an enriching environment where students thrive
              through immersive Japanese language instruction and cultural
              exposure. We blend interactive learning with real-world context to
              help you succeed not just in the classroom — but in Japan itself.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="group relative h-60 w-full perspective-1000"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
                      <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>
                      <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
                      <div className="w-16 h-1 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden rotate-y-180 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="font-bold text-xl mb-4">{card.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <p className="text-sm text-gray-500">
              Tap cards to see more details
            </p>
          </div>
        </div>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }

          /* Mobile touch enhancements */
          @media (max-width: 768px) {
            .group:active .group-hover\\:rotate-y-180 {
              transform: rotateY(180deg);
            }

            .group {
              cursor: pointer;
            }
          }

          /* Enhanced animations for mobile */
          @media (hover: none) and (pointer: coarse) {
            .group:active .group-hover\\:rotate-y-180 {
              transform: rotateY(180deg);
            }

            .group:active .group-hover\\:scale-110 {
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
