
import React from 'react';
import ceo from '../../public/images/ceo.png';
import ContactForm from '../components/contactform/ContactForm';
import Image from 'next/image';
// import Link from 'next/link';

const page = () => {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Afroharvest Food Stuff Trading LLC is a leading commodity importing and exporting company dedicated to providing high-quality Sudanese crops and other commodities to global markets. Our commitment to excellence ensures that our products meet the highest standards of quality. We are proud to represent Alfabriga African in Sudan which stands as a pioneering force in the realm of agribusiness, marking its footprint across diverse industries since 1939. As leaders in diary animal feed production, our commitment to nutritional excellence is unparalleled, crafting feeds that elevate the health and productivity of livestock. Additionally, we take pride in being at the forefront of exporting high-quality Sudanese origin commodities, ensuring that the rich agricultural heritage of Sudan reaches global markets. Our expertise extends to the production of premium edible oils, including sesame oil, peanut oil, and sunflower oil, where our legacy of quality shines brightly. Alfabriga African is not only a key player in these domains but also a trailblazer in PP bags production, employing high-tech methodologies to create durable and customizable packaging solutions. At Alfabriga African, we lead by innovation, redefine standards, and consistently deliver excellenceacross the spectrum of our diversified services.',
    paragraph: 'The founder of this group and its chairman is Mr. Babiker MohammedAhmed, one of the first pioneers in the oil industry and extraction of oils.with his high energy and ambition the group has been elevated by science, knowledge and good dealing and providing quality. His ability to select qualified people working in various disciplines, which hastened to consolidate the group’s prominent position in the oil industry and its inputs in Sudan. Mr. Babiker Mohammed Ahmed held a distinguished position in the record of the most prominent businessmen and industry in Sudan. With the expansion of the business department in the group joined the department of administrative, professional, financial and planning business, his sons Mr. Mohammed Ahmed Babiker Chairman of the Board of Directors and Mr. Nour Babiker Mohammed Ahmed as General Manager and a team of expert collaborators, employees and workers in various fields. '
  };

  return (
    <>
      <div className='container mx-auto px-4 py-6'>
        {/* <div className='flex justify-center items-center my-[60px]'>
            <Image src={afro} alt='bannar' width={600} height={350}/>
        </div> */}
        <div className="w-full flex gap-8 justify-between">

          <div className="flex flex-col bg-transparent my-20 px-4 ">
            <h2 className="font-black text-4xl lg:text-6xl mb-4">{data.title}</h2>
            <div className='lg:flex '>
            <Image src={ceo} alt='bannar' width={400} height={350} className='w-[400px] h-[350px]' />
            <div className='py-8 mx-8'>
              <p className="text-gray-700 text-[14px] font-light mb-4 text-balance">{data.description}</p>
            <p className="text-gray-700 text-[14px] font-light mb-4 text-balance">{data.paragraph}</p></div>
            
            </div>
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
