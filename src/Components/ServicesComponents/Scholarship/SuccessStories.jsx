import React from "react";
import TestimonialCarousel from "../../HelperComponents/TestimonialCarousel";

const img1 =
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop&crop=center";
const img2 =
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop&crop=center";
const img3 =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop&crop=center";

const testimonialsData = [
  {
    name: "University of Tokyo",
    logo: img1,
    description:
      "Receiving a full academic scholarship from ABC University changed my life. It not only eased the financial burden on my family but also motivated me to strive for academic excellence every single day.",
    student: "Sarah Johnson",
    degree: "Computer Science",
  },
  {
    name: "keio University",
    logo: img2,
    description:
      "The merit-based scholarship I received at DEF University allowed me to pursue my engineering dream without financial constraints. I'm beyond grateful for the support and the confidence it gave me.",
    student: "Michael Chen",
    degree: "Engineering",
  },
  {
    name: "Waseda University",
    logo: img3,
    description:
      "Thanks to the international student scholarship, I was able to focus entirely on my research. HIJ University made me believe that financial barriers should never stop someone from dreaming big.",
    student: "Emily Rodriguez",
    degree: "Physics",
  },
];

export default function SuccessStories() {
  return (
    <TestimonialCarousel
      title="Scholarship Success Stories"
      subtitle="Hear how scholarships empowered our students to pursue their dreams abroad"
      testimonials={testimonialsData}
    />
  );
}
