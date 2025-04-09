import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { montserrat } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import WhatsappButton from "./WhatsappButton";

const Header = ({ data }: { data: Product }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1
            className={cn([
              montserrat.className,
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
            ])}
          >
            {data.title}
          </h1>

          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            {data.discount.percentage > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ₹
                {Math.round(
                  data.price - (data.price * data.discount.percentage) / 100
                )}
              </span>
            ) : data.discount.amount > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ₹{data.price - data.discount.amount}
              </span>
            ) : (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ₹{data.price}
              </span>
            )}

            {(data.discount.percentage > 0 || data.discount.amount > 0) && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ₹{data.price}
              </span>
            )}

            {data.discount.percentage > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                -{data.discount.percentage}%
              </span>
            ) : data.discount.amount > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                -₹{data.discount.amount}
              </span>
            ) : null}
          </div>

          <p className="text-sm sm:text-base text-black/60 mb-5"></p>

          {/* <hr className="h-[1px] border-t-black/10 mb-5" />
          <ColorSelection /> */}

          <hr className="h-[1px] border-t-black/10 my-5" />
          <SizeSelection />
          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <AddToCardSection data={data} />
            <WhatsappButton data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
