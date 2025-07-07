import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import History from "./Components/AboutComponents/History";
import OurTeam from "./Components/AboutComponents/OurTeam";
import Vision from "./Components/AboutComponents/Vision";
import CEO from "./Components/AboutComponents/CEO";
import AnimatedIntro from "./Components/HelperComponents/AnimatedIntro";
import ScholarhipMain from "./Components/ServicesComponents/ScholarhipMain";
import Consulting from "./Components/ServicesComponents/Consulting";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import OurTeamsCopy from "./Components/AboutComponents/OurTeamsCopy";
import FAQmain from "./Components/FAQComponents/FAQmain";
import ChatBot from "./Components/ChatComponents/ChatBot";
import LanguageSwitcher from "./Components/HelperComponents/LanguageSwitcher";
import NotFound from "./Pages/NotFound";
import Coordiantor from "./Components/AboutComponents/Coordinator";
import { Toaster } from "react-hot-toast";

const mainContentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    // Match the timing with AnimatedIntro exit animation
    const timer = setTimeout(() => setShowMainContent(true), 4800); // 4.8s total
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {/* <AnimatePresence mode="wait">
        {!showMainContent ? (
          <AnimatedIntro key="intro" />
        ) : ( */}
      <motion.div
        key="main"
        variants={mainContentVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen"
      >
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<OurTeamsCopy />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/ceo" element={<CEO />} />
          <Route path="/about/coordinator" element={<Coordiantor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/scholarship" element={<ScholarhipMain />} />
          <Route path="/services/faq" element={<FAQmain />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        {/* ChatBot - Will appear on all pages */}
        <ChatBot />
        <LanguageSwitcher />
      </motion.div>
      {/*  )}
      </AnimatePresence> */}
    </div>
  );
}
export default App;
