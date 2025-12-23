"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart,} from "lucide-react";
import { ShoppingBag, Star } from "lucide-react";

export default function SimilarItems() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="mb-8">
          <h3 className="text-[24px] font-semibold text-[#020202] relative inline-block">
            Similar Items
            <span className="block w-[40px] h-[4px] bg-[#BE968E] mt-2" />
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div>

            <div
              key={item}
              className="
                max-w-[288px]
                bg-white
                rounded-[20px]
                p-4
                flex
                flex-col
                shadow-[0_8px_24px_rgba(0,0,0,0.03)]
                mb-2
                "
                >
              {/* Image box */}
              <div className="relative rounded-[16px] h-[240px] flex items-center justify-center mb-4">
                <Image
                  src="/items/item1.png"
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain mt-[80px]"
                />
                

                {/* Discount */}
                <span
                  className="
                    absolute
                    top-2
                    left-2
                    flex
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-[#BE968E]
                    text-[#BE968E]
                    font-medium

                    /* mobile */
                    text-[9px]
                    px-2
                    h-[24px]

                    /* sm+ */
                    sm:text-[10px]
                    sm:px-3
                    sm:h-[30px]
                  "
                >
                  25% OFF
                </span>

                {/* Icons */}
                <div className="absolute top-[8px] right-[8px] flex gap-2">
                  <button className="
                    flex
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-[#BE968E]
                    text-[#BE968E]

                    /* mobile */
                    w-[28px]
                    h-[28px]

                    /* sm+ */
                    sm:w-[36px]
                    sm:h-[36px]
                    ">
                    <ShoppingBag size={16}  />
                  </button>
                  <button className="
                    flex
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-[#BE968E]
                    text-[#BE968E]

                    /* mobile */
                    w-[28px]
                    h-[28px]

                    /* sm+ */
                    sm:w-[36px]
                    sm:h-[36px]
                  ">
                    <Heart size={16}  />
                  </button>
                </div>
              </div>
            </div>

              <div className="flex justify-between align-center">
              {/* Category */}
              <p className="text-[12px] text-[#8A8A8A] mb-1">Dresses</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-[13px] text-[#545454] mb-2">
                <Star size={14} fill="#BE968E" stroke="none" />
                <span>4.5</span>
                <span className="text-[#8A8A8A]">(290)</span>
              </div>
            </div>

              {/* Title */}
              <p className="text-[14px] font-medium text-[#020202] mb-2 line-clamp-2">
                J.VER Women’s Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free
              </p>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

              {/* Price */}
              <div className="flex items-center gap-2 ">
                <span className="text-[16px] font-semibold text-[#020202]">
                  AED 900
                </span>
                <span className="text-[13px] text-[#8A8A8A] line-through">
                  AED 1300
                </span>
              </div>

              {/* Colors (RIGHT aligned – like design) */}
              <div className="flex items-center justify-end gap-2 ">
                <span className="w-[20px]  h-[20px]  rounded-full bg-[#BE968E]" />
                <span className="w-[20px]  h-[20px]  rounded-full bg-[#333333]" />
                <span className="w-[20px]  h-[20px]  rounded-full bg-[#E8E8E8]" />
                <span className="text-[14px] text-[#020202]">+2</span>
              </div>
            </div>
          </div>
          ))}
          
        </div>
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-10">
            {/* Prev */}
            <button
              className="
                w-[44px]
                h-[44px]
                rounded-full
                bg-[#EEF1F4]
                flex
                items-center
                justify-center
              "
            >
              <ChevronLeft size={20} className="text-[#020202]" />
            </button>

            {/* Next */}
            <button
              className="
                w-[44px]
                h-[44px]
                rounded-full
                bg-[#BE968E]
                flex
                items-center
                justify-center
              "
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

  </div>
</section>
);
}
