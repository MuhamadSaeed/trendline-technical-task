"use client";

import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";
import RatingReviews from "@/components/RatingReviews";
import SimilarItems from "@/components/SimilarItems";
import Image from "next/image";

import {
  Home,
  LayoutGrid,
  Info,
  Phone,
  HelpCircle,
  ShoppingCart,
  Bell,
  Heart,
  ChevronDown,
  PersonStanding,
  Menu
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[17.5px] pb-[17.5px]">
          <div className="flex items-center h-14">
            {/* NavBar */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image src="/Logo.png" alt="logo" width={65} height={51} priority className="object-contain"/>
              </div>
              {/* Nav links */}
              <nav className="hidden md:flex gap-6 text-sm text-gray-600">

                <Link href="/" className="flex items-center gap-1 text-[#8A8A8A]">
                  <Home size={14} />
                  <span>Home</span>
                </Link>

                <Link href="/categories" className="flex items-center gap-1 text-[#8A8A8A]">
                  <LayoutGrid size={14} />
                  <span>Our Category</span>
                </Link>

                <Link href="/about" className="flex items-center gap-1 text-[#8A8A8A]">
                  <Info size={14} />
                  <span>About Us</span>
                </Link>

                <Link href="/contact" className="flex items-center gap-1 text-[#8A8A8A]">
                  <Phone size={14} />
                  <span>Contact Us</span>
                </Link>

                <Link href="/faq" className="flex items-center gap-1 text-[#8A8A8A]">
                  <HelpCircle size={14} />
                  <span>FAQs</span>
                </Link>
              </nav>
            </div>

            <div className="ml-auto flex items-center gap-4">

              {/* Mobile Menu */}
              <div className="flex md:hidden">
                <Menu size={22} className="text-[#020202]" />
              </div>

              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-4">
                <ShoppingCart size={17} className="cursor-pointer text-[#020202]" />
                <Bell size={17} className="cursor-pointer text-[#020202]" />
                <Heart size={17} className="cursor-pointer text-[#020202]" />

                <div className="hidden sm:flex items-center gap-1 text-sm cursor-pointer text-[#020202]">
                  <span>EN</span>
                  <ChevronDown size={14} />
                </div>

                <div className="hidden sm:flex items-center gap-1 text-sm cursor-pointer text-[#020202]">
                  <PersonStanding size={14} />
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="w-full bg-[#F7F7F7] flex items-center justify-center h-[193px]">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="font-semibold text-[32px]">Product Details</h1>
        </div>
      </section>

      {/* deatils */}
      <ProductDetails />

      {/* rating */}
      <RatingReviews />

      {/* similer */}
      <SimilarItems />

      {/* footer */}
      <Footer />
    </div>
  );
}
