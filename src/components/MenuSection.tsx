import React, { useState } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { 
  Plus, 
  Minus, 
  Check, 
  ShoppingBag, 
  Search, 
  Sparkles, 
  Utensils, 
  CupSoda, 
  Coffee, 
  Sandwich, 
  Croissant, 
  IceCream 
} from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  cartItemCounts: Record<string, number>;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  cartItemCounts,
  onAddToCart,
  onOpenCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track which item currently has its quantity picker "unhidden"
  const [activePicker, setActivePicker] = useState<Record<string, number>>({});
  
  // Track brief "Just Added" status for visual feedback
  const [justAdded, setJustAdded] = useState<Record<string, boolean>>({});

  const categories: { key: MenuCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Items', icon: <Utensils className="w-3.5 h-3.5" /> },
    { key: 'juices', label: 'Fresh Juices', icon: <CupSoda className="w-3.5 h-3.5" /> },
    { key: 'smoothies', label: 'Smoothies & Shakes', icon: <Coffee className="w-3.5 h-3.5" /> },
    { key: 'sandwiches', label: 'Sandwiches', icon: <Sandwich className="w-3.5 h-3.5" /> },
    { key: 'pastries', label: 'Pastries & Snacks', icon: <Croissant className="w-3.5 h-3.5" /> },
    { key: 'icecream', label: 'Ice Cream & Sundaes', icon: <IceCream className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleOpenPicker = (item: MenuItem) => {
    setActivePicker((prev) => ({
      ...prev,
      [item.id]: prev[item.id] || 1,
    }));
  };

  const handleIncrement = (itemId: string) => {
    setActivePicker((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId: string) => {
    setActivePicker((prev) => {
      const current = prev[itemId] || 1;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return {
        ...prev,
        [itemId]: current - 1,
      };
    });
  };

  const handleConfirmAddToCart = (item: MenuItem) => {
    const quantity = activePicker[item.id] || 1;
    onAddToCart(item, quantity);
    
    setJustAdded((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setJustAdded((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);

    setActivePicker((prev) => {
      const updated = { ...prev };
      delete updated[item.id];
      return updated;
    });
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white/70 backdrop-blur-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Our Menu · Handcrafted Daily</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Juices, Sandwiches, Snacks & Sundaes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything is prepared fresh to order at Adjacent Prison Quarters. Walk in or order ahead on WhatsApp for quick counter pickup.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search juices, club sandwich, meatpie, sundae..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Tabs with Lucide SVG Icons */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs scale-102'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                  }`}
                >
                  <span className={isActive ? 'text-amber-300' : 'text-stone-500'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200 p-6">
            <p className="text-stone-500 text-sm">No items found matching your filter.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const inCartQty = cartItemCounts[item.id] || 0;
              const isPickerOpen = activePicker[item.id] !== undefined;
              const selectedQty = activePicker[item.id] || 1;
              const isSuccess = justAdded[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Item Image & Badge */}
                  <div>
                    <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      
                      {item.badge && (
                        <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                          {item.badge}
                        </div>
                      )}

                      {inCartQty > 0 && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                          <ShoppingBag className="w-3 h-3" />
                          <span>{inCartQty} in cart</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-display font-bold text-lg text-stone-900 leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-mono text-base font-extrabold text-emerald-800 shrink-0 tabular-nums">
                          GHC {item.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] text-stone-500 font-medium"
                            >
                              {tag}{idx < item.tags!.length - 1 ? ' ·' : ''}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Area with unhideable quantity stepper */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 mt-2">
                    {isSuccess ? (
                      <div className="w-full py-2.5 px-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Added to Cart!</span>
                      </div>
                    ) : isPickerOpen ? (
                      <div className="space-y-2 animate-in fade-in duration-200">
                        <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl p-1.5">
                          <button
                            type="button"
                            onClick={() => handleDecrement(item.id)}
                            className="w-9 h-9 rounded-lg bg-white border border-stone-200 text-stone-700 flex items-center justify-center hover:bg-stone-100 active:scale-95 transition-all cursor-pointer font-bold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <div className="text-center px-3">
                            <span className="text-xs text-stone-400 block leading-none">Qty</span>
                            <span className="font-mono text-base font-extrabold text-stone-900 tabular-nums">
                              {selectedQty}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleIncrement(item.id)}
                            className="w-9 h-9 rounded-lg bg-white border border-stone-200 text-stone-700 flex items-center justify-center hover:bg-stone-100 active:scale-95 transition-all cursor-pointer font-bold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleConfirmAddToCart(item)}
                          className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>
                            Add {selectedQty} to Cart · GHC {(item.price * selectedQty).toFixed(2)}
                          </span>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenPicker(item)}
                        className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-emerald-700 hover:text-white text-stone-800 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-emerald-600"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Order {item.name.split(' ')[0]}</span>
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Cart Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h3 className="font-display font-bold text-lg">
              Ordering ahead for quick walk-in pickup?
            </h3>
            <p className="text-emerald-200/90 text-xs sm:text-sm mt-0.5">
              Send your order straight to WhatsApp; we'll have it freshly packed and ready in 5–10 minutes.
            </p>
          </div>
          <button
            onClick={onOpenCart}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            Review Cart & WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
