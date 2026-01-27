import HeroSection from "../components/Hero";
import About from "../components/AboutSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import GallerySection from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonial";
import useSEO from "../hooks/useSEO";

export default function Home() {
  
  useSEO({
  title: "Decor Studio | Premium Decor & Printing Solutions in Kota",
  description:
    "Decor Studio provides professional printing, wallpaper, CNC cutting, LED signage and custom decor services in Kota.",
});

  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <GallerySection />
      <Contact />
    </>
  )
}