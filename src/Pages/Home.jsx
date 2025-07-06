import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import Introduction from "../Components/HomeComponents/Introduction";
import Services from "../Components/HomeComponents/Services";
import WhyChooseUS from "../Components/HomeComponents/WhyChooseUS";
import FeaturedUniversities from "../Components/HomeComponents/FeaturedUniversities";
import SmallGallery from "../Components/HomeComponents/SmallGallery";
import GetInTouch from "../Components/HomeComponents/GetInTouch";
import Testimonials from "../Components/HomeComponents/Testimonials";

const customHeroImages = [
  {
    url: "uploads/img1.jpeg",
    title: "Start you journey with us.",
    subtitle: "Your custom subtitle description here",
  },
  {
    url: "uploads/img2.jpeg",
    title: "Join us in your coming educational journey",
    subtitle: "Another engaging subtitle for your business",
  },
  {
    url: "uploads/img3.jpeg",
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
  {
    url: "uploads/img4.jpeg",
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
  {
    url: "uploads/img5.jpeg",
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
];
export default function Home() {
  return (
    <div className="">
      <HeroSection
        images={customHeroImages}
        autoPlayInterval={5000}
        height="80vh"
      />
      <Introduction />
      <Services />
      <WhyChooseUS />
      <FeaturedUniversities />
      {/* <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white"> */}
      <SmallGallery />
      {/* </div> */}
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
