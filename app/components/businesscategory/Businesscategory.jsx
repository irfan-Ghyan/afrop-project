// components/ImageGrid.js
'use client';

import React from 'react';
import Image from 'next/image';

const BusinessCategory = () => {
  const images = [
    { src: '/images/pnt.png', title: 'Peanut' },
    { src: '/images/pnt1.png', title: 'Pine nut' },
    { src: '/images/pist.png', title: 'pistachio' },
    { src: '/images/sun.png', title: 'Sunflower' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
        <div className='py-[40px]'><h1 className='text-center text-6xl font-black text-[#ad8c19]'>BUSINESS <span className='text-6xl  font-thin text-gray-400'>CATEGORY</span></h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col justify-center items-center lg:justify-evenly p-4 w-80 hover:border-2 hover:border-[#ad8c19]">
            <Image src={image.src} alt={image.alt} width={40} height={40} className="w-40 h-20 mb-4 flex items-center justify-center" />
            <h2 className="text-[#2b5c17] text-2xl font-bold hover:text-[#ad8c19] text-center">{image.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCategory;
