"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Image1 from "@/public/images/herosection/photo-1469474968028-56623f02e42e.avif";
import Image2 from "@/public/images/herosection/photo-1488646953014-85cb44e25828.avif";
import Image3 from "@/public/images/herosection/photo-1506905925346-21bda4d32df4.avif";

const slides = [
  {
    image: Image1,
    title: "Explore the World with Arif Tour and Travel",
    subtitle:
      "Create unforgettable memories with our expertly crafted tour packages",
    location: "Discover Amazing Destinations",
  },
  {
    image: Image2,
    title: "Domestic Adventures Await",
    subtitle:
      "Explore the beauty of India with our carefully planned domestic packages",
    location: "From Kerala to Kashmir",
  },
  {
    image: Image3,
    title: "International Escapes",
    subtitle: "Discover the world beyond with our international tour packages",
    location: "Dubai, Thailand, Singapore & More",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const whatsappUrl =
    "https://wa.me/917845818773?text=Hello%20Arif%20Tour%20and%20Travel,%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages.";

  if (!isLoaded) return null;

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute z-30 inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              quality={85}
              className="object-cover w-full h-full z-30"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/40 z-40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-balance">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-pretty">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex items-center justify-center mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">{slides[currentSlide].location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#domestic"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              Explore Packages
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
