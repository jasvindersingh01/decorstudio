import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

//pages
import PrintingBranding from "./pages/services/PrintingBranding";
import WallpaperWallGraphics from "./pages/services/WallpaperWallGraphics";
import CncLaserCutting from "./pages/services/CncLaserCutting";
import EventPropsDisplays from "./pages/services/EventPropsDisplays";
import LedLettersSignage from "./pages/services/LedLettersSignage";
import CustomDecorSolutions from "./pages/services/CustomDecorSolutions";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/services/printing-branding" element={<PrintingBranding />} />
        <Route path="/services/wallpaper-wall-graphics" element={<WallpaperWallGraphics />} />
        <Route path="/services/cnc-laser-cutting" element={<CncLaserCutting />} />
        <Route path="/services/led-letters-signage" element={<LedLettersSignage />} />
        <Route path="/services/event-props-displays" element={<EventPropsDisplays />} />
        <Route path="/services/custom-decor-solutions" element={<CustomDecorSolutions/>} />
      </Routes>
      </div>

      <FloatingButtons />
      <Footer />
    </>
  )
}