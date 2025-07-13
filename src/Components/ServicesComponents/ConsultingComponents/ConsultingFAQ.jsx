import React, { useEffect, useState } from "react";
import Accordion from "../../HelperComponents/Accordion";
import { Award, BookOpen, Globe } from "lucide-react";
import { useFaqSection } from "../../../Hooks/useFaqContent";

export default function ConsultingFAQ() {
  const { faqs } = useFaqSection("faq3");
  const [accordion, setAccordion] = useState([]);

  useEffect(() => {
    // Map loaded FAQs into accordion format with IDs and initial isOpen state
    const formatted = faqs.map((item, index) => ({
      id: index + 1,
      title: item.title,
      description: item.description,
      isOpen: false,
    }));
    setAccordion(formatted);
  }, [faqs]);

  const toggleAccordion = (accordionId) => {
    const updatedAccordions = accordion.map((accord) =>
      accord.id === accordionId
        ? { ...accord, isOpen: !accord.isOpen }
        : { ...accord, isOpen: false }
    );
    setAccordion(updatedAccordions);
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              (FAQ's)
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Expert Guidance at Every Step: Your Questions About Our Consulting
            Services Answered
          </p>
        </div>
        <div className="space-y-2">
          {accordion.map((accor) => (
            <Accordion
              key={accor.id}
              id={accor.id}
              title={accor.title}
              description={accor.description}
              isOpen={accor.isOpen}
              toggleAccordion={() => toggleAccordion(accor.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
