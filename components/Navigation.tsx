import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <div className="relative h-12 w-12">
            <Image
              src="/commit-coffee.png"
              alt="Commit Coffee"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#producto" className="flex items-center gap-1.5 text-sm font-semibold tracking-widest text-[#F5F5F5] hover:text-[#00FF88] transition-colors duration-200 uppercase">
            Shop
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mb-3" />
          </a>
          <a href="#origen" className="text-sm font-semibold tracking-widest text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 uppercase">
            Our Story
          </a>
          <a href="#origen" className="text-sm font-semibold tracking-widest text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 uppercase">
            Origin
          </a>
          <a href="#comunidad" className="text-sm font-semibold tracking-widest text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 uppercase">
            Community
          </a>
          <a href="#" className="text-sm font-semibold tracking-widest text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 uppercase">
            Blog
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Account"
            className="w-9 h-9 flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative w-9 h-9 flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#00FF88] text-black text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
