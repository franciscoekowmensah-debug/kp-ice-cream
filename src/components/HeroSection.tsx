import React from 'react';
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Heart, Leaf, CupSoda } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOpenCart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOpenCart,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Subtle organic warmth background blur */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-amber-100/50 via-orange-100/40 to-emerald-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Location & Freshness Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Obuasi · Adjacent Prison Quarters</span>
              <span className="text-emerald-400">|</span>
              <span className="text-amber-700 font-bold">100% Fresh</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.08] text-balance">
              Freshness in every sip,{' '}
              <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                goodness
              </span>{' '}
              in every bite.
            </h1>

            {/* Subtext - strictly walk-ins and order ahead, no delivery */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Freshly squeezed natural fruit juices, rich smoothies, oven-warm savory pastries, crispy triple-decker sandwiches, and our famous creamy ice cream sundaes. Walk in or order ahead for quick counter pickup at Adjacent Prison Quarters.
            </p>

            {/* Feature Pills with SVG icons */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-stone-600 pt-1">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Cold-Pressed Daily</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>No Artificial Preservatives</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Ready in 5–10 Mins</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>View Menu & Order Ahead</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#location"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-semibold text-sm hover:bg-stone-50 transition-all text-center"
              >
                Find Our Stand on Map
              </a>
            </div>

            {/* Flyer Trust Highlight */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-500">
              <span className="font-semibold text-emerald-800">We serve:</span>
              <span className="truncate">Juices · Smoothies · Sandwiches · Pastries · Sundaes</span>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="overflow-hidden rounded-3xl bg-stone-100 border border-stone-200/90 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="/gallery/gallery_fresh_juices_smoothies_1790282003450.jpg"
                  alt="Kim Prince Juice & Snack Bar Fresh Beverages"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Card Details */}
                <div className="p-5 bg-white border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-stone-900 text-base">
                      Fresh. Tasty. Healthy.
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Order ahead for fast counter pickup
                    </p>
                  </div>
                  <button
                    onClick={onExploreMenu}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Order Ahead
                  </button>
                </div>
              </div>

              {/* Floating Badge (Location & WhatsApp) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-base shadow-xs">
                  <CupSoda className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    Adjacent Prison Quarters
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    WhatsApp: 0556120005
                  </div>
                </div>
              </div>

              {/* Quality Seal with SVG Leaf */}
              <div className="absolute -top-4 -right-3 bg-emerald-800 text-white font-extrabold text-[11px] px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white tracking-wide flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-amber-300" />
                <span>100% NATURAL</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
