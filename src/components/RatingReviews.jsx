"use client";

import { Star } from "lucide-react";

export default function RatingReviews() {
  return (
    <section className="w-full mt-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Title ===== */}
        <div className="mb-10">
          <h3 className="text-[24px] font-semibold text-[#020202] inline-block">
            Rating & Reviews
          </h3>
          <div className="w-[40px] h-[4px] bg-[#BE968E] mt-2 rounded-full" />
        </div>

        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-10 mb-14">

          {/* Average */}
          <div className="flex items-start gap-3 relative h-fit w-[200px]">
            <span className="text-[120px] font-semibold leading-none text-[#020202]">
              4,5
            </span>
            <span className="text-[24px] text-[#8A8A8A] absolute bottom-0 right-0">/5</span>
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-4">
            {[
              { star: 5, value: 67 },
              { star: 4, value: 15 },
              { star: 3, value: 6 },
              { star: 2, value: 3 },
              { star: 1, value: 9 },
            ].map((item) => (
              <div
                key={item.star}
                className="flex items-center gap-4 text-[14px]"
              >
                {/* Star */}
                <div className="flex items-center gap-1 text-[#020202]">
                  <Star size={14} fill="#C49A8C" stroke="none" />
                  <span>{item.star}</span>
                </div>

                {/* Bar */}
                <div className="h-[6px] w-[363px] bg-[#E6E6E6] rounded-[12px] overflow-hidden">
                  <div
                    className="h-full bg-[#BE968E] rounded-[12px]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>

                {/* Percent */}
                <span className="w-[36px] text-[#8A8A8A] text-[12px]">
                  %{item.value}
                </span>
              </div>
            ))}
          </div>


          {/* Total Reviews */}
          <div className="flex flex-col gap-1 items-start lg:items-center">
            <div className="text-left lg:text-center">
              <p className="text-[14px] text-[#545454]">Total Reviews</p>
              <p className="text-[60px] font-semibold text-[#020202]">
                3.0K
              </p>
            </div>

            <button className="h-[56px] w-[186px] px-8 rounded-[14px] bg-[#BE968E] text-white text-[14px] font-medium">
              Add Comment
            </button>
          </div>
        </div>

        {/* ===== Comments ===== */}
        <div className="flex flex-col">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border-t border-[#EAEAEA] py-6"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <p className="text-[20px] font-medium text-[#000000]">
                    Alex Daewn
                  </p>
                  <div className="flex gap-[3px]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={20}
                        fill="#BE968E"
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>

                <span className="text-[14px] text-[#545454]">
                  4 months ago
                </span>
              </div>

              <p className="text-[16px] text-[#020202] leading-[1.8] max-w-[1102px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed diam nonummy Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>

        {/* ===== View More ===== */}
        <div className="flex justify-center mt-12">
          <button className="h-[53px] w-[207px] px-6 rounded-[12px] bg-[#F5F5F5] text-[#BE968E] text-[14px] font-medium">
            View More Comments
          </button>
        </div>

      </div>
    </section>
  );
}
