import React from "react";

export default function OurVision() {
  // Placeholder images - replace with your actual image imports
  const visionImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  const coffeeImage =
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="bg-gray-50">
      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  At Momijij International Academy, we envision a world where
                  every student has access to global opportunities for personal
                  and professional growth. We aim to be a bridge for aspiring
                  individuals to build meaningful connections, enhancing their
                  educational and career pathways in Japan.
                </p>
                <p className="mb-8">
                  Our goal is to create a transformative educational environment
                  where students not only learn but also experience the rich
                  culture and lifestyle of Japan. Through our comprehensive
                  services and expert guidance, we strive to shape the next
                  generation of global leaders.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>First:</strong> To provide students with a
                      world-class education that combines the best of both
                      Japanese and international curricula.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Second:</strong> To build a cultural exchange
                      platform, fostering mutual understanding between Japan and
                      the rest of the world.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Third:</strong> To ensure students are equipped
                      with the skills and knowledge required to excel in their
                      academic and professional careers in Japan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={visionImage}
                  alt="Team collaboration representing our vision"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-2"></h3>
                  <p className="text-sm text-gray-700">
                    Empowering students to pursue their dreams, wherever they
                    may lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mx-2 md:mx-6 relative overflow-hidden bg-gradient-to-r from-[#FFE04F] to-[#FF8B0f] text-white rounded-4xl">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={coffeeImage}
                alt="Person enjoying coffee representing our mission"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="font-bold text-gray-900 mb-2"></h3>
                <p className="text-sm text-gray-700">
                  Ensuring students are not only prepared academically, but are
                  culturally equipped to thrive in Japan.
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:pl-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg leading-relaxed">
                <p className="mb-6">
                  Our mission at Momijij International Academy is to guide
                  students every step of the way in their academic journey to
                  Japan. We provide not only top-tier educational services, but
                  also the necessary support to help students adapt and
                  integrate into the Japanese culture, ensuring their success in
                  a globalized world.
                </p>
                <p className="mb-8">
                  From expert career counseling to in-depth Japanese language
                  training, we aim to create holistic educational experiences
                  that meet the needs of diverse learners. Our focus is on
                  ensuring our students are prepared not only for the academic
                  challenges they will face in Japan, but also for their
                  professional endeavors in the country and beyond.
                </p>

                {/* Mission Points */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>First:</strong> To provide students with expert
                      guidance throughout the process of studying and working in
                      Japan, from application to settling in.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Second:</strong> To help students navigate the
                      Japanese education system, offering support with language,
                      documentation, and application processes.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Third:</strong> To foster an environment of
                      continuous cultural exchange, ensuring students are
                      equipped to thrive both academically and socially in
                      Japan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
