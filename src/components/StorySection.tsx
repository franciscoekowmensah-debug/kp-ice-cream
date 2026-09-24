import React from 'react';
import { Citrus, ShieldCheck, Flame, Heart } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-stone-50 border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
            The Kim Prince Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Freshness in Every Sip, Goodness in Every Bite
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From our beginnings serving hand-scooped sundaes to scaling into Obuasi's favorite full juice and snack bar.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Citrus className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-stone-900 mb-2">
                100% Real Fruit
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Sweet pineapples, juicy watermelons, ripe mangoes and citrus pressed fresh daily. Zero artificial powders or chemical flavors.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-4">Pure & Natural</span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-stone-900 mb-2">
                Warm Crispy Snacks
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Golden flaky meat pies stuffed with spiced beef, fresh baked blueberry muffins, and crispy hot samosas baked fresh on site.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-700 mt-4">Oven-Fresh Daily</span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-stone-900 mb-2">
                Legendary Sundaes
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Cold creamy sundaes, thick milkshakes, and signature ice cream cocktails served with crisp wafers and decadent drizzle.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-rose-700 mt-4">Original Obuasi Recipe</span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-stone-900 mb-2">
                Fast WhatsApp Orders
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Order directly to 0556120005. Skip waiting in line; we pack your cold drinks and warm snacks ready for quick pickup or delivery.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-sky-700 mt-4">Ready in 5–10 Mins</span>
          </div>

        </div>

      </div>
    </section>
  );
};
