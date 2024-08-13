import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  const images = [
    { id: 'white-sesame-seeds', src: '/images/img1.jpg', title: 'White Sesame Seeds',  },
    { id: 'red-sesame-seeds', src: '/images/img2.jpg', title: 'Red Sesame Seeds' },
    { id: 'peanut-kernels', src: '/images/img3.jpg', title: 'Peanut Kernels' },
    { id: 'peanut-cake', src: '/images/img4.jpg', title: 'Peanut Cake' },
    { id: 'water-melon-seeds', src: '/images/img5.jpg', title: 'Water Melon Seeds' },
    { id: 'chick-peas', src: '/images/img6.jpg', title: 'Chick Peas' },
    { id: 'pigeon', src: '/images/img7.jpg', title: 'Pigeon' },
    { id: 'arabic-gum', src: '/images/img8.jpg', title: 'Arabic gum' },
    { id: 'white-sesame-seeds-2', src: '/images/img9.jpg', title: 'White Sesame Seeds' },
    { id: 'water-melon-seeds-2', src: '/images/img10.jpg', title: 'Water Melon Seeds' },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 mt-10 py-20">
      {images.map((image, index) => (
        <Link key={index} href={`/products/${image.id}`} passHref>
          <div className="relative group h-80 cursor-pointer">
            <Image
              src={image.src}
              alt={image.title}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="transition-opacity duration-500 group-hover:opacity-75 border-2 border-gray-400"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#ad8c19] bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500">
              <h2 className="hidden group-hover:flex text-white text-4xl font-bold">
                {image.title}
              </h2>
              <p className="hidden group-hover:flex text-white text-xl font-normal">{image.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
