import React from "react";
import { useTranslation } from "react-i18next";

export default function Coordiantor() {
  const { t } = useTranslation();
  const image =
    "https://unsplash.com/photos/smiling-woman-wearing-white-and-black-pinstriped-collared-top-QXevDflbl8A";
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
        {/* CEO Name and Title - Positioned at top */}
        <div className="mb-8">
          <div className="text-4xl font-extrabold text-gray-800 border-l-8 border-amber-400 pl-6 mb-2">
            Nista Dangol
          </div>
          <div className="text-2xl font-light text-amber-600 pl-6">
            Co-ordiantion Officer
          </div>
        </div>

        {/* CEO Image - Floated to create text wrap */}
        <div className="float-right w-80 h-96 ml-8 mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="Co-ordinator"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content with Enhanced Styling */}
        <div className="text-justify text-gray-700 leading-relaxed space-y-6">
          {/* First paragraph with drop cap */}
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et
            unde porro eius exercitationem. Deserunt facilis nihil asperiores
            corporis reiciendis suscipit neque voluptate vitae dignissimos,
            itaque quasi iusto, nesciunt praesentium animi ipsa commodi odio
            minus cupiditate. Quisquam distinctio explicabo a delectus ad at,
            eius nihil odio, inventore dicta, adipisci cupiditate ipsa
            consequatur animi. Dolorum ipsam, culpa laboriosam nihil numquam
            accusantium assumenda recusandae deleniti qui blanditiis amet nulla
            fugit fuga! Facilis doloremque labore itaque commodi excepturi
            facere veritatis sint beatae. Delectus obcaecati quas quod saepe,
            sed aliquam est vitae nihil voluptas et laudantium esse cum rem
            tempore? Ea nisi aut perferendis id assumenda, magnam reprehenderit
            impedit officiis rerum? Nam sed tenetur voluptatum doloribus
            voluptatem, molestiae aut incidunt accusantium expedita autem minima
            a enim. Culpa porro illo aliquam magni beatae ea laudantium est
            tempore inventore iusto deleniti odio officiis eius nostrum, cum
            maxime reiciendis consectetur aperiam sapiente quas fugiat libero?
          </p>

          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptates deleniti quasi porro soluta consectetur quia, et
            dignissimos labore quas illo adipisci cupiditate laborum cumque nisi
            blanditiis ad iste fuga voluptatum totam eos voluptas magni qui.
            Exercitationem, dolorem adipisci debitis voluptatum quam voluptate,
            quo reiciendis tempora doloribus, temporibus facilis inventore.
          </p>

          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptas molestiae itaque aut molestias minus laborum vel asperiores
            porro dicta omnis ex totam dolores animi a iste necessitatibus
            corporis exercitationem, minima nulla at! Nobis doloribus illum, eos
            fugit laboriosam totam maxime ipsa, commodi modi quia inventore
            dicta dolor aut repellendus suscipit obcaecati delectus vitae
            dolorem nihil corrupti eligendi perferendis a voluptatum. Earum, rem
            amet beatae voluptatum doloremque nesciunt architecto a fugiat harum
            exercitationem magnam saepe aperiam illo explicabo esse quae dolores
            officia quisquam aliquam ut ipsum sit quaerat consequatur. Officiis
            cum nostrum atque perspiciatis maiores. Excepturi quidem, ipsum
            dolorem, adipisci aut blanditiis quod asperiores sit consequuntur
            fuga culpa, exercitationem eius repellendus. Molestiae dolorum
            incidunt, sequi commodi et beatae dolorem qui dolore at vero, labore
            reprehenderit officiis necessitatibus ea excepturi repellat maiores
            fugiat cupiditate, in expedita! Architecto, reprehenderit ullam
            impedit vitae earum, explicabo eius qui minima quia cupiditate
            aliquid sunt sint.
          </p>

          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            pariatur nemo ullam, distinctio doloribus non nesciunt vitae
            corrupti maxime eligendi explicabo ex incidunt recusandae? Voluptate
            laudantium distinctio fugiat! Nam accusantium doloremque facere
            impedit quibusdam ipsum maxime, nisi veniam explicabo asperiores
            consectetur nostrum atque deserunt fuga nemo expedita? Facere,
            eveniet maxime?
          </p>

          {/* Contact Info with Enhanced Styling */}
          <div className="clear-both pt-8 mt-8 border-t border-amber-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:info@gmail.com"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  info@gmail.com
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
