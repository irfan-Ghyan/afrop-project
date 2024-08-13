import React from 'react';
import ceo from '../../public/images/ceo.png';
import ContactForm from '../components/contactform/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import whiteSesame from '../../public/images/img1.jpg';
import redSesame from '../../public/images/img2.jpg';
import peanutKernels from '../../public/images/img3.jpg';
import peanutCake from '../../public/images/img4.jpg';
import gumArabic from '../../public/images/img5.jpg';
import watermelonSeeds from '../../public/images/img6.jpg';
import chickPeas from '../../public/images/img7.jpg';
import pigeonPeas from '../../public/images/img9.jpg';

const page = () => {
  const data = {
    title: 'Exporting Products',
    description: 'In 2016, our group established its Commodities Exporting Division. We take pride in sourcing the finest agricultural products directly from the fertile fields of Sudan. Our commitment to quality assurance begins at the roots, ensuring that each crop is cultivated with precision and care. We pride ourselves on our swift export services, ensuring minimal lead time to deliver our premium products to any destination. We meticulously handle every aspect of the export process, from harvesting to packaging, to deliver the authenticity and excellence our clients expect. What sets us apart is our unwavering commitment to adhering to each country’s importing regulations, guaranteeing a smooth and compliant delivery process. At present, we serve a wide client base from different countries such as China, India, Turkey, Algeria, Yemen, etc.',
  };

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

  return (
    <>
      <div className='container mx-auto px-4 py-6'>
        <div className="flex">
          <div className=" flex flex-col bg-transparent mt-[60px] px-4">
            <h2 className="font-black text-6xl mb-4 text-center">{data.title}</h2>
            <p className="text-gray-700 text-[14px] text-center font-light mb-4 text-balance py-4">{data.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-[60px]">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center border-2 border-[#ad8c19] hover:bg-[#ad8c19] hover:border-2 hover:border-[#ad8c19] p-8">
              <Image src={product.image} alt={product.name} width={300} height={250} />
              <p className="mt-2 text-center">{product.title}</p>
              <p className="mt-2 text-center">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  )
}

export default page;
