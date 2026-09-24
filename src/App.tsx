/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { GalleryModal } from './components/GalleryModal';
import { StorySection } from './components/StorySection';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { SnowfallBackground } from './components/SnowfallBackground';
import { MENU_ITEMS, GALLERY_MEDIA_ITEMS } from './data/menu';
import { MenuItem, CartItem, GalleryMedia } from './types';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kim_prince_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Media gallery list
  const [galleryMedia, setGalleryMedia] = useState<GalleryMedia[]>(() => {
    try {
      const custom = localStorage.getItem('kim_prince_custom_gallery');
      if (custom) {
        const parsedCustom = JSON.parse(custom);
        return [...GALLERY_MEDIA_ITEMS, ...parsedCustom];
      }
    } catch {
      // ignore
    }
    return GALLERY_MEDIA_ITEMS;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kim_prince_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Compute total item count in cart
  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Map of itemId -> count in cart for fast lookups
  const cartItemCounts = cart.reduce((acc, c) => {
    acc[c.item.id] = c.quantity;
    return acc;
  }, {} as Record<string, number>);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity: number) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { item, quantity }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((c) => (c.item.id === itemId ? { ...c, quantity: newQty } : c))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleAddCustomMedia = (newMedia: GalleryMedia) => {
    setGalleryMedia((prev) => {
      const updated = [newMedia, ...prev];
      try {
        const customItems = updated.filter((item) => item.isCustom);
        localStorage.setItem(
          'kim_prince_custom_gallery',
          JSON.stringify(customItems)
        );
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-stone-900 bg-gradient-to-b from-orange-50/90 via-white to-amber-50/80 selection:bg-emerald-500 selection:text-white">
      
      {/* Raining light blue frostflakes / snowflakes canvas background */}
      <SnowfallBackground />

      {/* Header (Desktop text navigation + Mobile brand top bar) */}
      <Header
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Main Content (with bottom padding on mobile for sticky bottom icon navigation) */}
      <main className="grow relative z-20 pb-24 md:pb-0">
        {/* Hero Section */}
        <HeroSection
          onExploreMenu={scrollToMenu}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Menu Section with unhidden number picker & Sandwiches/Pastries */}
        <MenuSection
          items={MENU_ITEMS}
          cartItemCounts={cartItemCounts}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Gallery Section with random photo preview & See More */}
        <GallerySection
          mediaItems={galleryMedia}
          onOpenFullGallery={() => setIsGalleryOpen(true)}
          onSelectMedia={() => setIsGalleryOpen(true)}
        />

        {/* Story & Quality Pillars Section */}
        <StorySection />

        {/* Functional Google Maps & Location Section (Adjacent Prison Quarters) */}
        <LocationMapSection />
      </main>

      {/* Footer with Creator Credit */}
      <Footer
        onOpenCart={() => setIsCartOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Persistent Mobile Bottom Navigation (icons only, always visible when scrolling) */}
      <MobileBottomNav
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Cart Drawer & WhatsApp Order Modal (0556120005) */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Full Media Gallery Modal (autoplay, looping, no controls videos) */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        mediaList={galleryMedia}
        onAddCustomMedia={handleAddCustomMedia}
      />
    </div>
  );
}
