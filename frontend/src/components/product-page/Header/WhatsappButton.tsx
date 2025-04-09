"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/types/product.types";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ data }: { data: Product }) => {
  const pathname = usePathname();

  // Use localhost for dev
  const fullLink = `http://localhost:3000${pathname}`;
  const message = `Hi! I'm interested in "${data.title}" (${fullLink}). Is it available?`;
  const whatsappURL = `https://wa.me/919463482625?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 px-5 sm:px-6 md:px-7 h-12 md:h-[52px] w-full sm:w-full rounded-full text-sm sm:text-base font-semibold text-white hover:bg-green-700 transition-all flex items-center justify-center gap-2 mt-3 sm:mt-0">
      <FaWhatsapp className="text-xl" />
      Enquire & Order
    </a>
  );
};

export default WhatsappButton;
