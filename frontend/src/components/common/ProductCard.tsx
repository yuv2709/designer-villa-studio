import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const imageUrl = data.srcUrl || "/images/default.webp";

  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start w-full lg:max-w-[295px] h-[500px] lg:h-[600px] xl:h-[650px]">
      
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full h-[350px] lg:h-[430px] xl:h-[480px] mb-4 overflow-hidden">
        {imageUrl.startsWith("http") ? (
          <Image
            src={imageUrl}
            width={295}
            height={395}
            alt={data.title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
            priority
          />
        ) : (
          <img
            src={imageUrl}
            alt={data.title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
          />
        )}
      </div>

      <strong className="text-black xl:text-xl mb-2">{data.title}</strong>

      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        {data.discount.percentage > 0 ? (
          <span className="font-bold text-black text-xl xl:text-2xl">
            ₹{Math.round(
              data.price - (data.price * data.discount.percentage) / 100
            )}
          </span>
        ) : data.discount.amount > 0 ? (
          <span className="font-bold text-black text-xl xl:text-2xl">
            ₹{data.price - data.discount.amount}
          </span>
        ) : (
          <span className="font-bold text-black text-xl xl:text-2xl">
            ₹{data.price}
          </span>
        )}

        {(data.discount.percentage > 0 || data.discount.amount > 0) && (
          <>
            <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
              ₹{data.price}
            </span>
            <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              {data.discount.percentage > 0
                ? `-${data.discount.percentage}%`
                : `-₹${data.discount.amount}`}
            </span>
          </>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
