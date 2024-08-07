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
    title: 'Products',
    description: 'In 2016, our group established its Commodities Exporting Division. We take pride in sourcing the finest agricultural products directly from the fertile fields of Sudan. Our commitment to quality assurance begins at the roots, ensuring that each crop is cultivated with precision and care. We pride ourselves on our swift export services, ensuring minimal lead time to deliver our premium products to any destination. We meticulously handle every aspect of the export process, from harvesting to packaging, to deliver the authenticity and excellence our clients expect. What sets us apart is our unwavering commitment to adhering to each country’s importing regulations, guaranteeing a smooth and compliant delivery process. At present, we serve a wide client base from different countries such as China, India, Turkey, Algeria, Yemen, etc.',
  };

  const products = [
    { name: 'White Sesame Seeds', image: whiteSesame },
    { name: 'Red Sesame Seeds', image: redSesame },
    { name: 'Peanut Kernels', image: peanutKernels },
    { name: 'Peanut Cake', image: peanutCake },
    { name: 'Gum Arabic', image: gumArabic },
    { name: 'Water Melon Seeds', image: watermelonSeeds },
    { name: 'Chick Peas', image: chickPeas },
    { name: 'Pigeon Peas', image: pigeonPeas },
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
            <div key={index} className="flex flex-col items-center">
              <Image src={product.image} alt={product.name} width={300} height={250} />
              <p className="mt-2 text-center">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  )
}

export default page;
