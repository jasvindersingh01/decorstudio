import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'printing', 'wallpaper', 'cutting', 'decor'];

  const galleryImages = [
    { id: 1, category: 'printing', title: 'Flex & Vinyl Printing', image: 'img1' },
    { id: 2, category: 'wallpaper', title: 'Custom Wallpaper Design', image: 'img2' },
    { id: 3, category: 'cutting', title: 'Precision CNC Cutting', image: 'img3' },
    { id: 4, category: 'decor', title: 'Interior Decor Project', image: 'img4' },
    { id: 5, category: 'printing', title: 'Large Format Printing', image: 'img5' },
    { id: 6, category: 'wallpaper', title: 'Textured Wallpaper', image: 'img6' },
    { id: 7, category: 'cutting', title: 'Custom Cutting Work', image: 'img7' },
    { id: 8, category: 'decor', title: 'Office Decor Solutions', image: 'img8' },
    { id: 9, category: 'printing', title: 'Banner Printing', image: 'img9' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div
      id='gallery'

      className="min-h-screen bg-black text-white py-20 px-4 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase border border-yellow-400/30 px-4 py-2 rounded-full">
              Our Gallery
            </span>
          </div>
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-400">Premium</span> Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional decor and printing projects that showcase our commitment to quality and creativity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${activeCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-transparent text-gray-400 border border-gray-700 hover:border-yellow-400 hover:text-yellow-400'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => openLightbox(image)}
            >
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-700">{image.image}</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-sm uppercase tracking-wider">{image.category}</span>
                  <ZoomIn className="text-yellow-400" size={24} />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-800">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-400 text-lg">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-gray-400 text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400 text-lg">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full">
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-400/30">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-9xl font-bold text-gray-700">{selectedImage.image}</span>
              </div>
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <span className="text-yellow-400 text-sm uppercase tracking-wider">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;