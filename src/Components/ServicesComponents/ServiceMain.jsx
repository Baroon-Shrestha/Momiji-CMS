import React from "react";
import MainServices from "./ServiceMainComponents/MainServices";
import ServicesContent from "./ServiceMainComponents/ServicesContent";
import Motto from "./ServiceMainComponents/Motto";
import Universities from "./ServiceMainComponents/Universities";
import Scholarship from "./ServiceMainComponents/Scholarship";
import Why from "./ServiceMainComponents/Why";
import FAQ from "./ServiceMainComponents/FAQ";
import ServicesBanner from "../HomeComponents/Services";
import CoreServices from "./ServiceMainComponents/CoreServices";

export default function ServiceMain() {
  return (
    <div>
      <MainServices />

      {/* <ServicesContent2 /> */}
      <ServicesContent />
      <div className="text-white bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] mx-2 md:mx-6 rounded-4xl">
        <Motto />
      </div>
      <CoreServices />
      <Why />
      <Universities />
      <Scholarship />
      <FAQ />
    </div>
  );
}
