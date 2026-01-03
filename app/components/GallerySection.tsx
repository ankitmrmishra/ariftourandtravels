"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- Types -------------------- */
type Category = "all" | "domestic" | "international";

type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  description: string;
};

/* -------------------- Data -------------------- */
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

/* -------------------- Component -------------------- */
export default function GallerySection() {
  const [category, setCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(() => {
    return category === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((i) => i.category === category);
  }, [category]);

  /* ---------- Lightbox Navigation ---------- */
  const goPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % images.length);
  };

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  return (
    <section className="space-y-8 md:min-w-5xl">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Travel Gallery</h2>
        <p className="text-muted-foreground">
          Discover stunning destinations around the world. Hover to see details,
          click to explore.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3">
        {(["all", "domestic", "international"] as Category[]).map((c) => {
          const active = category === c;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={[
                "px-4 py-2 rounded-md text-sm font-medium transition",
                active
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {c === "all" ? "All Photos" : c[0].toUpperCase() + c.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <GalleryCard
            key={img.src}
            image={img}
            onClick={() => setOpenIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && images[openIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <button onClick={goPrev} className="absolute left-4 text-white">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button onClick={goNext} className="absolute right-4 text-white">
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 text-center text-white space-y-1">
            <p className="font-semibold">{images[openIndex].alt}</p>
            <p className="text-sm opacity-80">
              {images[openIndex].description}
            </p>
            <p className="text-xs opacity-60">
              {openIndex + 1} of {images.length} — {images[openIndex].category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------- Gallery Card -------------------- */
function GalleryCard({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative h-72 rounded-xl overflow-hidden bg-muted focus:outline-none"
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted" />
      )}

      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className={[
          "object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onLoad={() => setLoaded(true)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

      <div className="absolute bottom-0 p-4 text-left text-white opacity-0 group-hover:opacity-100 transition">
        <p className="font-semibold">{image.alt}</p>
        <p className="text-sm opacity-80">{image.description}</p>
      </div>
    </button>
  );
}
