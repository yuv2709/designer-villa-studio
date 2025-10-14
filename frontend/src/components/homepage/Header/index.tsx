"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "FIND CLOTHES THAT MATCH YOUR STYLE",
    subtitle: "Discover trendy outfits that express your unique vibe.",
    image: "/images/banner1.jpg",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    title: "ELEVATE YOUR WARDROBE",
    subtitle: "Step out in style with pieces that reflect your confidence.",
    image: "/images/banner2.jpg",
    buttonText: "New Arrivals",
    buttonLink: "/new-arrivals",
  },
  {
    id: 3,
    title: "Jewellery that Speaks Without Words",
    subtitle: "Refresh your accessories with our latest jewellery collection.",
    image: "/images/banner3.jpg",
    buttonText: "Explore Jewellery Collection",
    buttonLink: "/jewellery",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="Banner image"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
            <div>
              <h1 className={cn(montserrat.className, "text-white text-3xl md:text-5xl font-bold mb-4")}>
                {slides[index].title}
              </h1>
              <p className="text-white text-sm md:text-lg max-w-xl mx-auto mb-6">
                {slides[index].subtitle}
              </p>
              {slides[index].buttonText && (
                <Link href={slides[index].buttonLink || "#"}>
                  <span className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all text-sm md:text-base">
                    {slides[index].buttonText}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
