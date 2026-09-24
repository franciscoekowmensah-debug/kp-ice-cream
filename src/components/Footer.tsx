import React from 'react';
import { Phone, MapPin, MessageCircle, Heart, IceCream } from 'lucide-react';

interface FooterProps {
  onOpenCart: () => void;
  onOpenGallery: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCart, onOpenGallery }) => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-24 md:pb-12 border-t border-stone-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-sm">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                <IceCream className="w-5 h-5 text-amber-300" />
              </span>
              <div>
                <span className="font-display font-bold text-xl text-white block">
                  Kim Prince
                </span>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Juice & Snack Bar
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Obuasi’s favorite destination for 100% fresh fruit juices, thick smoothies, crispy sandwiches, oven-fresh golden meat pies, and rich ice cream sundaes.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-amber-300 font-medium">
              <span>Freshness in every sip, goodness in every bite!</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  The Menu
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenGallery}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Media Gallery
                </button>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  View Order
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">
              Visit & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Adjacent Prison Quarters, Obuasi, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+233556120005" className="hover:text-white font-mono">
                  +233 55 612 0005
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/233556120005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: 0556120005
                </a>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                Walk-ins & Order Ahead: 8:30 AM – 8:30 PM Daily
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Creator Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © 2026 Kim Prince Juice & Snack Bar. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Created with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <a
              href="https://bit.ly/4yChYMX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold underline decoration-amber-400/50 underline-offset-2 transition-colors"
            >
              EkowCisco
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
