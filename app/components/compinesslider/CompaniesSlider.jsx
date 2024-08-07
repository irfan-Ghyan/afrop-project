

'use client';

import React, { useEffect, useRef } from 'react';

const CompaniesSlider = ({ items }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scroll) {
        scroll.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= scroll.scrollWidth - scroll.clientWidth) {
          scrollAmount = 0;
          scroll.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {items.map((item, index) => (
          <div key={index} className="inline-block px-2">
            <div className="p-4 w-64">
              <img src={item} alt={`Slide ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesSlider;

