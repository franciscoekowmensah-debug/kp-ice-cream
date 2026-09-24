import React from 'react';
import { ShoppingBag, Phone, IceCream } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenGallery: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenGallery,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Zone 1: Brand title with Crown SVG icon */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-stone-900 group"
        >
          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-emerald-700 transition-colors">
            <IceCream className="w-5 h-5 text-amber-300" />
          </span>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-xl tracking-tight text-emerald-950 leading-tight">
              Kim Prince
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-amber-600 uppercase">
              Juice & Snack Bar
            </span>
          </div>
        </a>

        {/* Zone 2: Desktop 4-6 text navigation links (hidden on mobile, mobile uses bottom nav) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          <a href="#menu" className="hover:text-emerald-700 transition-colors py-1">
            Menu
          </a>
          <a href="#story" className="hover:text-emerald-700 transition-colors py-1">
            Our Story
          </a>
          <button 
            onClick={onOpenGallery}
            className="hover:text-emerald-700 transition-colors py-1 text-left cursor-pointer"
          >
            Gallery
          </button>
          <a href="#location" className="hover:text-emerald-700 transition-colors py-1">
            Location
          </a>
        </nav>

        {/* Zone 3: Primary action (Order Now button with counter) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCart}
            aria-label="View Order Cart"
            className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer ${
              cartCount > 0
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 ring-2 ring-emerald-600/30'
                : 'bg-stone-900 text-white hover:bg-stone-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="whitespace-nowrap">Order Now</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-bold bg-amber-400 text-stone-900 rounded-full tabular-nums shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
