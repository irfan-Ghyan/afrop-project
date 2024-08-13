

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/contactform/ContactForm';

import whiteSesame from '../../public/images/img1.jpg';
import redSesame from '../../public/images/img2.jpg';
import peanutKernels from '../../public/images/img3.jpg';
import peanutCake from '../../public/images/img4.jpg';
import gumArabic from '../../public/images/img5.jpg';
import watermelonSeeds from '../../public/images/img6.jpg';
import chickPeas from '../../public/images/img7.jpg';
import pigeonPeas from '../../public/images/img9.jpg';

const products = [
  {
    id: 'white-sesame-seeds',
    title: 'White Sesame Seeds',
    description: 'Discover the richness of Sudanese white sesame seeds with our premium selection, featuring two varieties: Gadarif and non-Gadarif. Gadarif seeds, grown in fertile lands, offer a unique nutty flavor, while non-Gadarif seeds bring diverse taste profiles. Elevate your culinary creations with the quality and authenticity of Sudanese sesame seeds.',
    image: whiteSesame,
  },
  {
    id: 'red-sesame-seeds',
    title: 'Red Sesame Seeds',
    description: 'Experience the excellence quality of our red sesame seeds, celebrated for their high quality and rich oil content. Sourced meticulously, these seeds are a testament to Sudanese agricultural prowess. Known for their premium quality, they impart a distinctive flavor to dishes, elevating your culinary experience.',
    image: redSesame,
  },
  {
    id: 'peanut-kernels',
    title: 'Peanut Kernels',
    description: 'Savor the deliciousness of Sudanese peanuts, famous for their amazing taste and high demand. Grown in Sudan fertile lands, these peanuts are extra special for their great quality and lots of oil.',
    image: peanutKernels,
  },
  {
    id: 'peanut-cake',
    title: 'Peanut Cake',
    description: 'Introducing our premium Peanut Meal, a nutrient-rich powerhouse derived from the heart of Sudan finest peanuts. Sourced meticulously and processed to perfection, our Peanut Meal is a versatile and protein-packed solution ideal for animal feeds. With a focus on quality and nutritional excellence, our product stands as a testament to Sudanese agricultural prowess. Elevate the well-being of your livestock and poultry with this essential ingredient, carefully crafted to meet the diverse needs of your animals.',
    image: peanutCake,
  },
  {
    id: 'gum-arabic',
    title: 'Gum Arabic',
    description: 'As a key player in the global market, we take pride in offering the finest Gum Arabic, sourced with meticulous care. Our exquisite selection encompasses both Hashab and Talha varieties, each representing the pinnacle of quality in the Gum Arabic world. Harvested from the arid landscapes of Sudan, our Gum Arabic is renowned for its clarity, solubility, and exceptional binding properties.',
    image: gumArabic,
  },
  {
    id: 'watermelon-seeds',
    title: 'Watermelon Seeds',
    description: 'Savor the nutritional richness of Sudanese watermelon seeds, a versatile ingredient that enhances various meals. Harvested with care, these seeds are a wholesome addition to your culinary repertoire. Packed with essential nutrients, watermelon seeds bring a nutritious boost to salads, desserts, and a range of dishes.',
    image: watermelonSeeds,
  },
  {
    id: 'chick-peas',
    title: 'Chick Peas',
    description: 'Sudanese chick peas is grown in the fertile soils of Sudan, our chickpeas boast a delightful taste and firm texture, making them an ideal ingredient for a myriad of dishes. Rich in protein, fiber, and essential minerals, these chickpeas not only enhance the flavor of your meals but also contribute to a balanced and wholesome diet.',
    image: chickPeas,
  },
  {
    id: 'pigeon-peas',
    title: 'Pigeon Peas',
    description: 'Nutritious pigeon peas, commonly used in soups, stews, and rice dishes.',
    image: pigeonPeas,
  },
];

const page = () => {
  const data = {
    title: 'Products',
    description: 'Delight in the superior quality of our carefully selected Sudanese pigeon peas, a hallmark of excellence in the world of legumes. Harvested with precision from the fertile lands of Sudan, our pigeon peas stand as a testament to our commitment to providing only the finest commodities. Packed with plant-based protein, fiber, and essential nutrients, our premium pigeon peas not only contribute to the deliciousness of your meals but also exemplify our dedication to delivering high-quality, thoughtfully chosen commodities.',
  };

  return (
    <>
      <div className='container mx-auto px-4 py-20 '>
        <div className="flex">
          <div className=" flex flex-col bg-transparent my-10 px-4">
            <h2 className="font-black text-6xl mb-4 text-center">{data.title}</h2>
            <p className="text-gray-700 text-[14px] font-light mb-4 text-balance text-center">{data.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {products.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`} passHref>
              <div className="flex flex-col items-center cursor-pointer">
                <Image src={product.image} alt={product.title} width={300} height={250} className=''/>
                <h3 className="mt-4 text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-center text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default page;
