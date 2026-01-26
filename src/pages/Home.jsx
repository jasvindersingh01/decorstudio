import HeroSection from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import GallerySection from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonial";

export default function Home() {
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