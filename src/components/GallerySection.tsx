import React, { useState, useEffect } from 'react';
import { GalleryMedia } from '../types';
import { Sparkles, ArrowRight, Shuffle, Play } from 'lucide-react';

interface GallerySectionProps {
  mediaItems: GalleryMedia[];
  onOpenFullGallery: () => void;
  onSelectMedia: (item: GalleryMedia) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  mediaItems,
  onOpenFullGallery,
  onSelectMedia,
}) => {
  const [randomPhotos, setRandomPhotos] = useState<GalleryMedia[]>([]);

  // Function to pick 3 or 4 random media items (preferring photos for main preview as requested)
  const pickRandomPreviews = () => {
    const photosOnly = mediaItems.filter((item) => item.type === 'image');
    const sourceList = photosOnly.length >= 3 ? photosOnly : mediaItems;
    
    // Shuffle and pick 3 or 4 items
    const shuffled = [...sourceList].sort(() => 0.5 - Math.random());
    setRandomPhotos(shuffled.slice(0, 4));
  };

  useEffect(() => {
    pickRandomPreviews();
  }, [mediaItems]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Gallery Preview</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Fresh From Our Counter
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              A random glimpse of today's cold blends, savory pastries, and sundaes in our <code className="bg-stone-200/80 px-1 py-0.5 rounded text-stone-800 text-xs">gallery</code>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={pickRandomPreviews}
              className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 shadow-2xs cursor-pointer transition-colors"
              title="Shuffle random preview photos"
            >
              <Shuffle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Shuffle</span>
            </button>

            <button
              onClick={onOpenFullGallery}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs cursor-pointer transition-all active:scale-98"
            >
              <span>See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {randomPhotos.map((media) => (
            <div
              key={media.id}
              onClick={() => onSelectMedia(media)}
              className="group relative rounded-2xl overflow-hidden bg-stone-200 aspect-4/3 sm:aspect-square shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-stone-200/80"
            >
              {media.type === 'video' ? (
                <div className="w-full h-full relative">
                  <video
                    src={media.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Loop</span>
                  </div>
                </div>
              ) : (
                <img
                  src={media.url}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Hover Scrim & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                  {media.type === 'video' ? 'Autoplay Clip' : 'Fresh Photo'}
                </span>
                <h4 className="font-display font-bold text-sm leading-snug text-balance">
                  {media.title}
                </h4>
                {media.description && (
                  <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">
                    {media.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA for See More */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenFullGallery}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-full border border-emerald-200/80 transition-colors cursor-pointer"
          >
            <span>Explore all gallery photos & autoplay video loops</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
