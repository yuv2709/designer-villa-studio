"use client";

import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { montserrat } from "@/styles/fonts";
import React from "react";

const NewsLetterSection = () => {
  const whatsappNumber = "919463482625"; // ✅ Replace with your WhatsApp number
  const message = "Hi! I’d like to get in touch regarding your boutique.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p
        className={cn([
          montserrat.className,
          "font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0",
        ])}
      >
        CONTACT US ON WHATSAPP
      </p>

      <div className="flex items-center">
        <div className="flex flex-col w-full max-w-[349px] mx-auto">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3 w-full"
              aria-label="Contact via WhatsApp"
              type="button"
            >
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
