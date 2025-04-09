import React from "react";
import { cn } from "@/lib/utils";
import { montserrat } from "@/styles/fonts";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { PaymentBadge, SocialNetworks } from "./footer.types";
import NewsLetterSection from "./NewsLetterSection";

const socialsData: SocialNetworks[] = [
  // { id: 1, icon: <FaTwitter />, url: "https://twitter.com" },
  { id: 2, icon: <FaFacebookF />, url: "https://www.facebook.com/p/Designer-villa-studio-by-jyoti-arora-100051871735349/" },
  { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/designer_villa_studio/" },
];

const paymentBadgesData: PaymentBadge[] = [
  { id: 1, srcUrl: "/icons/Visa.svg" },
  { id: 2, srcUrl: "/icons/mastercard.svg" },
  { id: 3, srcUrl: "/icons/paypal.svg" },
  { id: 4, srcUrl: "/icons/applePay.svg" },
  { id: 5, srcUrl: "/icons/googlePay.svg" },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]" />
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>

      <div className="pt-10 bg-[#F0F0F0] px-4 pb-6">
        <div className="max-w-frame mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 sm:gap-0">
            <div>
              <h1
                className={cn([
                  montserrat.className,
                  "text-[24px] font-bold mb-2",
                ])}
              >
                DESIGNER VILLA STUDIO
              </h1>
              <p className="text-sm text-black/60 max-w-sm">
                We have clothes that suit your style and you're proud to wear.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialsData.map((social) => (
                <Link
                  href={social.url}
                  key={social.id}
                  className="bg-white hover:bg-black hover:text-white transition-all w-8 h-8 rounded-full border border-black/20 flex items-center justify-center"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* <div className="flex items-center gap-3">
              {paymentBadgesData.map((badge) => (
                <span
                  key={badge.id}
                  className="w-[46px] h-[30px] bg-white border rounded-[5px] flex items-center justify-center"
                >
                  <Image
                    src={badge.srcUrl}
                    width={33}
                    height={15}
                    alt="payment method"
                    className="max-h-[15px]"
                  />
                </span>
              ))}
            </div> */}
          </div>

          <hr className="my-6 border-t-black/10" />

          <p className="text-center text-sm text-black/60">
            © 2025 DESIGNER VILLA STUDIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
