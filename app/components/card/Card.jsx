import Image from 'next/image';
import React from 'react';

const Card = () => {
  const images = [
    { src: '/images/img1.jpg', title: 'White Sesame Seeds' },
    { src: '/images/img2.jpg', title: 'Red Sesame Seeds' },
    { src: '/images/img3.jpg', title: 'Peanut Kernels' },
    { src: '/images/img4.jpg', title: 'Peanut Cake' },
    { src: '/images/img5.jpg', title: 'Water Melon Seeds' },
    { src: '/images/img6.jpg', title: 'Chick Peas' },
    { src: '/images/img7.jpg', title: 'Pigeon' },
    { src: '/images/img8.jpg', title: 'Arabic gum' },
    { src: '/images/img9.jpg', title: 'White Sesame Seeds' },
    { src: '/images/img10.jpg', title: 'Water Melon Seeds' },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 mt-10">
      {images.map((image, index) => (
        <div key={index} className="relative group h-80">
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="transition-opacity duration-500 group-hover:opacity-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#ad8c19] bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500">
            <h2 className="hidden group-hover:flex text-white text-2xl font-bold">
              {image.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
