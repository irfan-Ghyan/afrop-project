import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/contactform/ContactForm';

import whiteSesame from '../../public/images/img1.jpg';
import redSesame from '../../public/images/img2.png';
import peanutKernels from '../../public/images/img3.png';
import peanutCake from '../../public/images/img4.png';
import gumArabic from '../../public/images/img10.png';
import watermelonSeeds from '../../public/images/img5.png';
import chickPeas from '../../public/images/img7.png';
import pigeonPeas from '../../public/images/img8.png';
import hibiscus from '../../public/images/img9.png';

const products = [
  {
    id: 'white-sesame-seeds',
    title: 'White Sesame Seeds',
    description: 'Discover the richness of Sudanese white sesame seeds with our premium selection...',
    image: whiteSesame,
  },
  {
    id: 'red-sesame-seeds',
    title: 'Red Sesame Seeds',
    description: 'Experience the excellence quality of our red sesame seeds...',
    image: redSesame,
  },
  {
    id: 'peanut-kernels',
    title: 'Peanut Kernels',
    description: 'Savor the deliciousness of Sudanese peanuts...',
    image: peanutKernels,
  },
  {
    id: 'peanut-cake',
    title: 'Peanut Cake',
    description: 'Introducing our premium Peanut Meal, a nutrient-rich powerhouse...',
    image: peanutCake,
  },
  {
    id: 'gum-arabic',
    title: 'Gum Arabic',
    description: 'As a key player in the global market, we take pride in offering the finest Gum Arabic...',
    image: gumArabic,
  },
  {
    id: 'watermelon-seeds',
    title: 'Watermelon Seeds',
    description: 'Savor the nutritional richness of Sudanese watermelon seeds...',
    image: watermelonSeeds,
  },
  {
    id: 'chick-peas',
    title: 'Chick Peas',
    description: 'Sudanese chick peas is grown in the fertile soils of Sudan...',
    image: chickPeas,
  },
  {
    id: 'pigeon-peas',
    title: 'Pigeon Peas',
    description: 'Nutritious pigeon peas, commonly used in soups, stews, and rice dishes.',
    image: pigeonPeas,
  },
  {
    id: 'hibiscus',
    title: 'Hibiscus',
    description: 'A versatile ingredient, often used in teas, beverages, and traditional dishes.',
    image: hibiscus,
  },
];

const ProductPage = () => {
  const data = {
    title: 'Products',
    description: 'Discover our diverse range of premium products, sourced meticulously to ensure the highest quality for your needs.',
  };

  return (
    <>
      <div className='container mx-auto px-4 py-20'>
        <div className="flex justify-center">
          <div className="flex flex-col bg-transparent my-10 px-4 ">
            <h2 className="font-black text-6xl mb-4 text-center">{data.title}</h2>
            <p className="text-gray-700 text-[14px] font-light mb-4 text-balance ">{data.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`} passHref>
              <div className="flex flex-col items-center cursor-pointer border-2 border-[#ad8c19] hover:bg-[#ad8c19] hover:border-2 hover:border-[#ad8c19] p-8">
                <div className="w-48 h-48 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className='rounded-md'
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">{product.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default ProductPage;
