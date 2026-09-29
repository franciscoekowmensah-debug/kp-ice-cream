import React from 'react';
import { Utensils, Sparkles, Camera, MapPin, ShoppingBag, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenGallery: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenGallery,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Mobile Bottom Navigation" 
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 safe-area-pb"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {/* Menu Navigation Icon */}
        <button
          type="button"
          onClick={() => scrollToSection('menu')}
          aria-label="Menu"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 text-stone-600 hover:text-emerald-700 active:scale-95 transition-all rounded-2xl cursor-pointer"
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[9px] leading-none whitespace-nowrap">Menu</span>
        </button>

        {/* Gallery Icon */}
        <button
          type="button"
          onClick={() => scrollToSection('gallery')}
          // onClick={onOpenGallery}
          aria-label="Gallery"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 text-stone-600 hover:text-emerald-700 active:scale-95 transition-all rounded-2xl cursor-pointer"
        >
          <Camera className="w-5 h-5" />
          <span className="text-[9px] leading-none whitespace-nowrap">Gallery</span>
        </button>

        {/* Story Icon */}
        <button
          type="button"
          onClick={() => scrollToSection('story')}
          aria-label="Our Story"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 text-stone-600 hover:text-emerald-700 active:scale-95 transition-all rounded-2xl cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[9px] leading-none whitespace-nowrap">Story</span>
        </button>

        {/* Location Icon */}
        <button
          type="button"
          onClick={() => scrollToSection('location')}
          aria-label="Location Map"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 text-stone-600 hover:text-emerald-700 active:scale-95 transition-all rounded-2xl cursor-pointer"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[9px] leading-none whitespace-nowrap">Location</span>
        </button>

        {/* Cart / Order Icon with Live Counter Badge */}
        <button
          type="button"
          onClick={onOpenCart}
          aria-label="Shopping Cart and Order Now"
          className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 text-stone-600 hover:text-emerald-700 active:scale-95 transition-all rounded-2xl cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className={`w-5 h-5 ${cartCount > 0 ? 'text-emerald-700' : ''}`} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-stone-950 font-mono text-[10px] font-extrabold px-1.5 py-0.2 rounded-full min-w-4 text-center leading-tight shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] leading-none whitespace-nowrap">Cart</span>
        </button>

      </div>
    </nav>
  );
};
