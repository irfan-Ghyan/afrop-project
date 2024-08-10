
import React from 'react';
import ceo from '../../public/images/ceo.png';
import ContactForm from '../components/contactform/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Afroharvest is a company stablished in the UAE which is belonging to Alfabriga African group in Sudan.The founder of this group and its chairman is Mr. Babiker MohammedAhmed, one of the first pioneers in the oil industry and extraction of oils. with his high energy and ambition the group has been elevated by science, knowledge and good dealing and providing quality. His ability to select qualified people working in various disciplines, which hastened to consolidate the group’s prominent position in the oil industry and its inputs in Sudan.Mr. Babiker Mohammed Ahmed held a distinguished position in the record of the most prominent businessmen and industry in Sudan. With the expansion of the business department in the group joined the department of administrative, pr',

  };

  return (
    <>
    <div className='container mx-auto px-4 py-6'>
        {/* <div className='flex justify-center items-center my-[60px]'>
            <Image src={afro} alt='bannar' width={600} height={350}/>
        </div> */}
        <div className="flex gap-8 justify-between">
        <div className='w-2\3 '>
        <Image src={ceo} alt='bannar' width={400} height={350}/>
        </div>
        <div className="w-2\3 flex flex-col bg-transparent my-20 px-4">
          <h2 className="font-black text-4xl lg:text-6xl mb-4">{data.title}</h2>
          <p className="text-gray-700 text-[14px] font-light mb-4 text-balance">{data.description}</p>
          {/* <Link href="" className="w-[200px] my-[20px] border-2 border-[#ad8c19] text-gray-700 text-[14px] py-4 px-4 rounded-full font-normal hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] hover:text-white">
            {data.buttonText}
          </Link> */}
        </div>
        </div>
    </div>
    <ContactForm />
    </>
  )
}

export default page;
