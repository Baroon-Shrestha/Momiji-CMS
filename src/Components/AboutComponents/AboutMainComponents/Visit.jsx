import React from "react";
export default function Visit() {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="text-4xl font-extrabold mb-4">Visit Us</div>
      <div className="font-extralight text-xl max-w-2xl mb-8">
        Come Meet Us: Your Pathway to Studying in Japan Starts Here
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Google Map (fixed height for all screens) */}
        <div className="relative overflow-hidden rounded-2xl lg:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.47127473224896!2d85.31865729216634!3d27.735760294722926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bbcdc2e83b%3A0x5e2236bb8d5f5b5!2sMomiji%20Academy!5e0!3m2!1sen!2snp!4v1750136479693!5m2!1sen!2snp"
            className="w-full h-[500px] rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Desktop-only stacked images */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="h-[250px] overflow-hidden rounded-2xl">
            <img
              src="/uploads/img2.jpeg"
              alt="Modern cafe seating"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="h-[250px] overflow-hidden rounded-2xl">
            <img
              src="/uploads/img6.jpeg"
              alt="People enjoying coffee"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Mobile-only side-by-side images */}
      <div className="grid grid-cols-2 gap-4 mt-4 lg:hidden">
        <img
          src="/uploads/img2.jpeg"
          alt="Modern cafe seating"
          className="w-full h-[170px] object-cover rounded-2xl"
        />
        <img
          src="/uploads/img6.jpeg"
          alt="People enjoying coffee"
          className="w-full h-[170px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
