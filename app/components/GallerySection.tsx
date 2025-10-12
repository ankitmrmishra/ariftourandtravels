"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Kerala Backwaters Houseboat",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Himachal Pradesh Mountains",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Rajasthan Palace",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Goa Beach",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1544966503-7cc2ac0a2b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Kashmir Valley",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mysore Palace",
      category: "domestic",
    },
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dubai Skyline",
      category: "international",
    },
    {
      src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Thailand Temple",
      category: "international",
    },
    {
      src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Singapore Marina Bay",
      category: "international",
    },
    {
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bali Rice Terraces",
      category: "international",
    },
    {
      src: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Malaysia Twin Towers",
      category: "international",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "International Adventure",
      category: "international",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "domestic" | "international"
  >("all");

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex =
      (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
            Travel Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of stunning travel photos from destinations
            across India and the world. Let these images inspire your next
            adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedCategory === "all"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedCategory("domestic")}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedCategory === "domestic"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setSelectedCategory("international")}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedCategory === "international"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image.src, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt={filteredImages[selectedIndex]?.alt || "Gallery image"}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <p className="text-lg font-medium">
                  {filteredImages[selectedIndex]?.alt}
                </p>
                <p className="text-sm opacity-80">
                  {selectedIndex + 1} of {filteredImages.length} photos
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Create Your Own Memories?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your next adventure with Arif Tour and Travel and create
              unforgettable experiences.
            </p>
            <a
              href="https://wa.me/919305396179?text=Hello%20Arif%20Tour%20and%20Travel,%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Trip Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
