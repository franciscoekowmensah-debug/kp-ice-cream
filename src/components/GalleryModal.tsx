import React, { useState } from 'react';
import { GalleryMedia } from '../types';
import { X, Play, Image as ImageIcon, Video, Upload, Sparkles, Camera } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaList: GalleryMedia[];
  onAddCustomMedia: (item: GalleryMedia) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  mediaList,
  onAddCustomMedia,
}) => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  if (!isOpen) return null;

  const filtered = mediaList.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isVid = file.type.startsWith('video');
    const objectUrl = URL.createObjectURL(file);

    const newMedia: GalleryMedia = {
      id: `custom-${Date.now()}`,
      title: file.name.replace(/\.[^/.]+$/, ''),
      type: isVid ? 'video' : 'image',
      url: objectUrl,
      description: 'Added from your device into the gallery session.',
      isCustom: true,
    };

    onAddCustomMedia(newMedia);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-stone-200">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50/80 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900">
                Kim Prince Gallery
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Upload Button */}
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors">
              <Upload className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Add Media</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-xl transition-colors cursor-pointer"
              aria-label="Close Gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="px-4 sm:px-6 py-3 bg-white border-b border-stone-100 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Media ({mediaList.length})
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'image'
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photos ({mediaList.filter(m => m.type === 'image').length})</span>
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'video'
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Looping Clips ({mediaList.filter(m => m.type === 'video').length})</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1 text-[11px] text-amber-700 font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Videos autoplay</span>
          </div>
        </div>

        {/* Media Grid Content */}
        <div className="p-4 sm:p-6 overflow-y-auto grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                {/* Media frame */}
                <div className="aspect-4/3 w-full relative bg-stone-900 overflow-hidden">
                  {item.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current text-amber-400" />
                        <span>Autoplay Loop</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Card Info */}
                <div className="p-4 bg-white grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-900 leading-snug">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="capitalize">{item.type}</span>
                    <span className="text-emerald-700 font-semibold group-hover:underline">Tap to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <span>Folder location: <strong className="text-stone-700">/public/gallery/</strong></span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold text-xs transition-colors cursor-pointer"
          >
            Back to Menu
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 flex flex-col items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.url}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
              />
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-base font-bold">{selectedMedia.title}</h3>
              {selectedMedia.description && (
                <p className="text-xs text-stone-300 mt-1 max-w-md">{selectedMedia.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
