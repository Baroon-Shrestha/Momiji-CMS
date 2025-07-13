import React from "react";

export default function ServiceCard({
  index,
  visible,
  hovered,
  onHover,
  onLeave,
  service,
}) {
  return (
    <div
      key={index}
      data-index={index}
      className={`service-card group relative transform transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onLeave()}
    >
      <div className="relative h-80 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 ease-out group-hover:scale-105 group-hover:-translate-y-2">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-8 transition-opacity duration-200 ease-out`}
        ></div>

        <div className="relative h-full flex flex-col">
          <div className="relative p-8 flex-shrink-0">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform transition-all duration-150 ease-out group-hover:scale-110`}
            >
              <div className="text-2xl">{service.icon}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 text-6xl text-gray-400 transform transition-all duration-200 ease-out">
              {service.icon}
            </div>
          </div>

          <div className="relative px-8 pb-8 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {service.description}
            </p>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left`}
        ></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-150 ease-out"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-150 ease-out"></div>
      </div>

      <div
        className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br ${
          service.color
        } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform transition-all duration-150 ease-out ${
          hovered === index ? "scale-110" : "scale-100"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}
