"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mt-24">
      <div className="relative ">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/kid.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F2922]/90 to-[#4A4238]/85" />

        {/* Content */}
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo & Description */}
            <div>
              <img src="/Logo.png" alt="Tinytales" className="h-9 mb-4" />

              <p className="text-[14px] leading-[1.7] text-[#FFFFFFB2] max-w-[260px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed diam nonummy.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold mb-4">Let Us Help</h4>
              <ul className="space-y-3 text-[14px] text-[#FFFFFFB2]">
                <li>My Account</li>
                <li>FAQs</li>
                <li>Categories</li>
                <li>All Products</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold mb-4">Policies</h4>
              <ul className="space-y-3 text-[14px] text-[#FFFFFFB2]">
                <li>Refund Policy</li>
                <li>About Us</li>
                <li>Cancellation Policy</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold mb-4">Send Email</h4>
              {/* Email input */}
              <div className="flex items-center bg-white rounded-[12px] h-[48px] w-full max-w-[500px] px-3 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="
                    flex-1
                    bg-transparent
                    pl-4
                    pr-2
                    text-[14px]
                    text-[#020202]
                    placeholder:text-[#9A9A9A]
                    outline-none
                    w-full
                  "
                />

                <button
                  className="
                    h-[36px]
                    min-w-[72px]
                    rounded-[12px]
                    bg-[#C49A8C]
                    text-white
                    text-[14px]
                    font-medium
                    flex
                    items-center
                    justify-center
                  "
                >
                  Send
                </button>
              </div>

             <p className="text-[14px] mb-4">Follow Us</p>
             <div className="flex gap-5 text-white">
                <Facebook size={18} />
                <Twitter size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
                <Send size={18} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
