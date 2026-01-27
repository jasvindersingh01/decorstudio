import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, title: "Flex & Vinyl Printing", image: "img1" },
    { id: 2, title: "Custom Wallpaper Design", image: "img2" },
    { id: 3, title: "Precision CNC Cutting", image: "img3" },
    { id: 4, title: "Interior Decor Project", image: "img4" },
    { id: 5, title: "Large Format Printing", image: "img5" },
    { id: 6, title: "Textured Wallpaper", image: "img6" },
  ];

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );

    if (currentIndex === -1) return;

    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryImages.length
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen bg-black text-white py-20 px-4 scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-6 text-yellow-400 text-sm font-semibold tracking-wider uppercase border border-yellow-400/30 px-4 py-2 rounded-full">
            Our Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-400">Premium</span> Work
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional decor and printing projects that
            showcase our commitment to quality and creativity.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-yellow-400/50 transition"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-700">
                  {image.image}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <ZoomIn className="text-yellow-400" size={24} />
              </div>
            </div>
          ))}
        </motion.div>
          <div className="flex items-center justify-center mt-14">
            <button className="bg-yellow-400 text-black py-2 px-10 text-2xl font-semibold rounded-full hover:Scale-102 transition-all duration-300 hover:bg-yellow-500">
              <Link to="/gallery">
                View Gallery
              </Link>
            </button>
          </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-800"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">500+</div>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">10+</div>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">100%</div>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-yellow-400"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-6 text-white hover:text-yellow-400"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-6 text-white hover:text-yellow-400"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl w-full">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-400/30">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-9xl font-bold text-gray-700">
                  {selectedImage.image}
                </span>
              </div>
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-2xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
