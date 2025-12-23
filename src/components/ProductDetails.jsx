"use client";

import { ChevronDown, Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* */}
        <div className="mb-5 text-sm text-gray-500 bg-[#ECECEC66] px-5 py-2 w-full h-[56px] flex items-center rounded-[16px]">
          <span className="text-[#020202] pr-1">Home </span>      
          <ChevronRight size={16} className="text-[#020202]" />
          <span className="text-[#020202] pr-1 pl-1">Our Category </span> 
          <ChevronRight size={16} className="text-[#020202]" />
          <span className="text-[#8A8A8A] pl-1">Product Details</span>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= LEFT ================= */}

          <div className="flex flex-col gap-2 w-full lg:max-w-[550px]">
            {/* Main Image */}
            <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[565px] rounded-[24px] bg-[#F5F5F5] overflow-hidden">

                {/* ===== Top parts */}
                <div className="absolute top-4 left-0 w-full px-6 flex gap-2 z-10">
                  <span className="flex-1 h-[4px] rounded-full bg-[#D4D4D4]" />
                  <span className="flex-1 h-[4px] rounded-full bg-[#FFFFFF]" />
                  <span className="flex-1 h-[4px] rounded-full bg-[#D4D4D4]" />
                  <span className="flex-1 h-[4px] rounded-full bg-[#D4D4D4]" />
                </div>

                {/* ===== Image ===== */}
                <div className="absolute inset-0">
                  <Image
                    src="/person.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* ===== Left Arrow ===== */}
                <button
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-[#C4C4C4]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ChevronLeft size={20} className="text-[#fff]" />
                </button>

                {/* ===== Right Arrow ===== */}
                <button
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-[#BE968E]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ChevronRight size={20} className="text-[#fff]" />
                </button>
              </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {/* Thumb 1 */}
              <div
                className="
                  relative
                  w-full
                  aspect-[169/183]
                  bg-[#F5F5F5]
                  rounded-[24px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  lg:w-[169px]
                  lg:h-[183px]
                "
              >
                <Image
                  src="/t-1.png"
                  alt=""
                  width={142}
                  height={142}
                  className="object-contain w-[142px] h-[142px]"
                />
              </div>

              {/* Thumb 2 */}
              <div
                className="
                  relative
                  w-full
                  aspect-[169/183]
                  bg-[#F5F5F5]
                  rounded-[24px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  lg:w-[169px]
                  lg:h-[183px]
                "
              >
                <Image
                  src="/t-2.png"
                  alt=""
                  width={142}
                  height={142}
                  className="object-contain w-[142px] h-[142px]"
                />
              </div>

              {/* Thumb 3 */}
              <div
                className="
                  relative
                  w-full
                  aspect-[169/183]
                  rounded-[24px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  lg:w-[169px]
                  lg:h-[183px]
                "
              >
                <Image
                  src="/t-1.png"
                  alt=""
                  width={142}
                  height={142}
                  className="object-contain w-[142px] h-[142px]"
                />
                <div className="absolute inset-0 bg-[#020202B2] flex items-center justify-center text-white text-[32px] font-medium">
                  +2
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col gap-5 ">

            {/* Tag + icons */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] px-4 py-[6px] rounded-full border border-[#BE968E] text-[#BE968E] rounded-[32px] font-medium w-[82px] h-[37px] flex items-center justify-center">
                T-Shirt
              </span>

              <div className="flex gap-3">
                <div className="w-[48px] h-[48px] flex items-center justify-center text-[#8A8A8A] p-[8px] rounded-[8px] text-[#BE968E] border-[1.5px] border-[#BE968E]">
                  <ShoppingBag size={16} />
                </div>
                <div className="w-[48px] h-[48px] flex items-center justify-center text-[#8A8A8A] p-[8px] rounded-[8px] text-[#BE968E] border-[1.5px] border-[#BE968E]">
                  <Heart size={16} />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[24px] font-semibold leading-[1.4] max-w-[524px] text-[#020202]">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h1>

            {/* Price */}
            <div>
              <div className="flex items-end gap-3">
              <span className="text-[20px] font-semibold text-[#020202]">$300.00</span>
              <span className="text-[13px] text-[#8A8A8A] line-through">$360.00</span>
            </div>

            <p className="text-[12px] text-[#333333]">This price is exclusive of taxes.</p>
           </div>

            {/* Description */}
            <p className="text-[14px] text-[#6F6F6F] leading-[1.7] max-w-[510px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
              Lorem ipsum dolor sit amet, diam nonummy
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#EAEAEA] "></div>

            <div className="flex flex-col gap-6 max-w-[420px]">

            {/* Type */}
            <div className="relative">
              {/* Label */}
              <span className="absolute left-4 -top-[10px] bg-white px-2 text-[12px] text-[#020202] font-medium">Type</span>
              <select
                className="
                w-[299px]
                h-[45px]
                rounded-[16px]
                border
                border-[#E0E0E0]
                px-5
                pr-12
                text-[12px]
                text-[#020202]
                bg-white
                appearance-none
                "
              >
                <option>Cotton</option>
              </select>

              {/* Arrow */}
              <span className="pointer-events-none absolute right-[140px] top-1/2 -translate-y-1/2 text-[#020202]">
                  <ChevronDown size={18} strokeWidth={2} />
              </span>
            </div>

            {/* Size */}
            <div className="relative">
              {/* Label */}
              <span className="absolute left-4 -top-[10px] bg-white px-2 text-[12px] text-[#020202] font-medium">
                Size
              </span>

              <select
                className="
                  w-[299px]
                  h-[45px]
                  rounded-[16px]
                  border
                  border-[#E0E0E0]
                  px-5
                  pr-12
                  text-[12px]
                  text-[#020202]
                  bg-white
                  appearance-none
                "
              >
                <option>2XL</option>
              </select>

              {/* Arrow */}
              <span className="pointer-events-none absolute right-[140px] top-1/2 -translate-y-1/2 text-[#020202]">
                  <ChevronDown size={18} strokeWidth={2} />
              </span>
            </div>
          </div>

            {/* Colors */}
            <div>
              <p className="text-[14px] font-medium mb-4 text-[#020202]">Colors</p>

              <div className="flex gap-6">
                {/* Red */}
                <div className="flex flex-col items-center ">
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <span className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#D90202]"></span>
                  </div>
                </div>

                {/* Blue (Selected) */}
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center border-2 border-[#020202]">
                    <span className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#B8CCDA]"></span>
                  </div>
                  <span className="text-[12px] text-[#8A8A8A]">Blue</span>
                </div>

                {/* Olive */}
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <span className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#988755]"></span>
                  </div>
                </div>

                {/* Light Blue */}
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <span className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#7198C8]"></span>
                  </div>
                </div>

                {/* Gray */}
                <div className="flex flex-col items-center ">
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <span className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#5D5D5B]"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-3 mt-6">

              {/* Title */}
              <p className="text-[16px] mt-4 font-medium text-[#020202]">
                Quantity{" "}
                <span className="text-[14px] text-[#8A8A8A] font-normal">
                  ($300.00 for Piece)
                </span>
              </p>

              {/* Row */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12">

              <div className="flex justify-start items-center gap-2">
                {/* Counter */}
                <div className="flex items-center h-[55px] bg-[#F5F5F5] rounded-[14px] px-4">
                  <button className="w-[32px] h-[32px] rounded-[8px] bg-white text-[#8A8A8A] text-[18px] flex items-center justify-center">
                    −
                  </button>

                  <span className="mx-4 text-[16px] font-medium text-[#020202]">
                    01
                  </span>

                  <button className="w-[32px] h-[32px] rounded-[8px] bg-white text-[#8A8A8A] text-[18px] flex items-center justify-center">
                    +
                  </button>
                </div>
                {/* Price */}
                <span className="text-[22px] font-semibold text-[#020202]">$300.00</span>
             </div>

              {/* Button */}
              <button className="h-[55px] w-[234px] px-12 rounded-[16px] bg-[#C49A8C] text-white text-[16px] font-medium flex items-center gap-2">
                Add To Cart
                <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        </div>
       </div>
     </div>
   </section>
 );
}
