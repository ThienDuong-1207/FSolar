"use client";

import { useEffect, useRef } from "react";

export function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    "JA Solar",
    "Jinko Solar",
    "Longi",
    "Huawei",
    "SMA",
    "Canadian Solar",
    "Trina Solar",
    "First Solar",
    "Growatt",
    "Sungrow",
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      // Reset when scrolled halfway (since we duplicated the array)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Đối Tác & Nhà Cung Cấp
          </h2>
          <p className="text-lg text-gray-600">
            Hợp tác với các thương hiệu hàng đầu thế giới
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Partners */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-16 overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-10 py-8 bg-white rounded-2xl shadow-md border border-gray-100 min-w-[240px] hover:shadow-xl transition-all duration-300"
            >
              <span className="text-3xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 tracking-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        div[ref]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
