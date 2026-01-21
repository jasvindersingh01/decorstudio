import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import About from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import GallerySection from "./components/Gallery";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <GallerySection />
      <Contact />
      <FloatingButtons />

      <Footer />
    </>
  )
}