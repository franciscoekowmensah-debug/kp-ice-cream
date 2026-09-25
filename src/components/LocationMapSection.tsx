import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  const googleMapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Adjacent+Prison+Quarters+Obuasi+Ghana';

  return (
    <section id="location" className="py-16 md:py-24 bg-white/70 backdrop-blur-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Visit Us in Obuasi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Adjacent Prison Quarters, Obuasi
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Drop by our shop for chilled fresh juices, hot toasted sandwiches, pastries, and sundaes, or tap below to navigate directly using Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Hours Information Card */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200">
            <div className="space-y-6">
              
              {/* Location Detail */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base">
                    Physical Location
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Adjacent Prison Quarters, Obuasi, Ashanti Region, Ghana
                  </p>
                  <p className="text-[11px] text-emerald-800 font-medium mt-1">
                    Near Pragya Station
                  </p>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base">
                    Contact & Orders
                  </h4>
                  <a
                    href="tel:+233556120005"
                    className="text-xs font-mono font-bold text-emerald-700 hover:underline block mt-1"
                  >
                    +233 55 612 0005 / 0504090823
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Call or send your order directly on WhatsApp
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-stone-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base">
                    Service Hours
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Monday – Sunday: <strong>9:00 AM – 10:00 PM</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
                    Open Daily
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="https://wa.me/233556120005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Owner (0556120005)</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed Card */}
          <div className="lg:col-span-8 flex flex-col bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden min-h-[420px]">
            
            {/* Map Toolbar */}
            <div className="p-3 sm:p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-stone-800">
                  Live Map: Adjacent Prison Quarters, Obuasi
                </span>
              </div>
            </div>

            {/* Embed Container */}
            <div className="relative grow w-full min-h-[380px] bg-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.079871039221!2d-1.6694131931119707!3d6.20341711272636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc6f8f7f151c0d%3A0x436bc5cf5057fef8!2s683J%2B8F6%2C%20Fomena%20Rd%2C%20Obuasi!5e0!3m2!1sen!2sgh!4v1790291024859!5m2!1sen!2sgh"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Kim Prince Juice & Snack Bar Location"
                className="w-full h-full min-h-[380px] border-0"
              />

              {/* Floating Landmark Overlay Tag with MapPin SVG */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-stone-200/80 max-w-xs pointer-events-auto flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-stone-900">
                    Kim Prince Juice & Snack Bar
                  </h5>
                  <p className="text-[11px] text-stone-500">
                    Adjacent Prison Quarters, Obuasi
                  </p>
                </div>
              </div>
            </div>

            {/* Map bottom bar */}
            <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span>Coordinates: 6.2025° N, 1.6705° W</span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
