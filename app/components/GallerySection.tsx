"use client";

import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Types
type Category = "all" | "domestic" | "international";

type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  description: string;
};

// Mock data with descriptions
const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/domesticpackages/kerala.jpg",
    alt: "Kerala Backwaters",
    category: "domestic",
    description:
      "Experience the serene backwaters of Kerala with scenic houseboat cruises",
  },
  {
    src: "/images/domesticpackages/himachalpradesh.jpg",
    alt: "Himachal Pradesh",
    category: "domestic",
    description:
      "Majestic mountains and adventure in the heart of the Himalayas",
  },
  {
    src: "/images/domesticpackages/goa.jpg",
    alt: "Goa Beach",
    category: "domestic",
    description:
      "Golden beaches and vibrant nightlife on India's coastal paradise",
  },
  {
    src: "/images/domesticpackages/kashmir.jpg",
    alt: "Kashmir Valley",
    category: "domestic",
    description:
      "The jewel of India with breathtaking landscapes and pristine valleys",
  },
  {
    src: "/images/domesticpackages/darjeeling.jpg",
    alt: "Darjeeling",
    category: "domestic",
    description:
      "Rolling tea gardens and stunning mountain views in the Eastern Himalayas",
  },
  {
    src: "/images/domesticpackages/manali.jpg",
    alt: "Manali",
    category: "domestic",
    description: "Adventure and natural beauty in this mountain hill station",
  },
  {
    src: "/images/internationalPackage/dubai.jpg",
    alt: "Dubai",
    category: "international",
    description:
      "Modern marvels and desert luxury in the UAE's premier destination",
  },
  {
    src: "/images/internationalPackage/bangkok.jpg",
    alt: "Bangkok",
    category: "international",
    description:
      "Ancient temples and vibrant street life in Thailand's bustling capital",
  },
  {
    src: "/images/internationalPackage/singapore.jpg",
    alt: "Singapore",
    category: "international",
    description:
      "Modern city-state with diverse culture and stunning architecture",
  },
  {
    src: "/images/internationalPackage/bali.jpg",
    alt: "Bali",
    category: "international",
    description: "Tropical paradise with beautiful beaches and ancient temples",
  },
  {
    src: "/images/internationalPackage/malaysia.jpg",
    alt: "Malaysia",
    category: "international",
    description: "Twin towers and diverse culture in Southeast Asia's jewel",
  },
  {
    src: "/images/internationalPackage/turkey.jpg",
    alt: "Turkey",
    category: "international",
    description: "Ancient history and modern charm where East meets West",
  },
];

export default function GallerySection() {
  const [category, setCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(
    () =>
      category === "all"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((i) => i.category === category),
    [category]
  );

  const openLightbox = (idx: number) => setOpenIndex(idx);
  const closeLightbox = () => setOpenIndex(null);

  const goPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % images.length);
  };

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  return (
    <section id="gallery" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-sans text-balance">
            Travel Gallery
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover stunning destinations around the world. Hover to see
            details, click to explore in full view.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 rounded-lg bg-muted p-1">
            {(["all", "domestic", "international"] as Category[]).map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    "px-4 py-2 rounded-md transition-colors font-medium",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {c === "all" ? "All Photos" : c[0].toUpperCase() + c.slice(1)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Grid - Uniform sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => {
            return (
              <button
                key={img.src + i}
                type="button"
                onClick={() => openLightbox(i)}
                className={[
                  "group relative overflow-hidden rounded-xl bg-muted",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                  "h-64 md:h-72 lg:h-80", // Uniform height across all sizes
                ].join(" ")}
                aria-label={`Open image: ${img.alt}`}
              >
                {/* Image - fill the container */}
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Black opacity overlay on hover - appears at bottom */}
                <div
                  className={[
                    "absolute bottom-0 left-0 right-0",
                    "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                    "h-40 pointer-events-none",
                    "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-300",
                  ].join(" ")}
                />

                {/* Info text on bottom - appears with overlay */}
                <div
                  className={[
                    "absolute bottom-0 left-0 right-0",
                    "p-4 text-white pointer-events-none",
                    "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-300",
                  ].join(" ")}
                >
                  <p className="font-bold text-sm md:text-base line-clamp-1">
                    {img.alt}
                  </p>
                  <p className="text-xs md:text-sm line-clamp-2 mt-1 text-gray-200">
                    {img.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lightbox */}
        {openIndex !== null && images[openIndex] && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-5xl max-h-[85vh]">
              {/* Image in contain mode */}
              <div className="relative w-full h-[60vh] md:h-[75vh] bg-background rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={images[openIndex].src || "/placeholder.svg"}
                  alt={images[openIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Info bar */}
              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="rounded-md bg-card/80 text-card-foreground backdrop-blur-sm border border-border px-4 py-3">
                  <p className="text-base font-semibold">
                    {images[openIndex].alt}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {images[openIndex].description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {openIndex + 1} of {images.length} —{" "}
                    {images[openIndex].category}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-card/80 text-card-foreground border border-border hover:bg-card transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-card/80 text-card-foreground border border-border hover:bg-card transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-destructive/20 text-primary-foreground hover:bg-destructive/30 transition-colors"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
