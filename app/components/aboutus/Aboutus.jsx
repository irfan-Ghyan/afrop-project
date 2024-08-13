import React from 'react';
import afro from '../../../public/images/arfo.png';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = ({ title, description, buttonText, imageSrc, imageAlt, heading, paragraph }) => {
  return (
    <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-center items-center my-[60px]'>
            <Image src={afro} alt='bannar' width={600} height={350}/>
        </div>
        <div className="gap-8 justify-between">
        <div className="w-full  flex flex-col bg-transparent p-6 items-center">
          <h2 className="font-black text-4xl lg:text-6xl text-[#ad8c19] mb-4">{title}</h2>
          <p className="text-gray-700 text-4xl font-thin mb-4 text-balance">{description}</p>
          <Link href="/about" className="w-[200px] my-[20px] border-2 border-[#ad8c19] text-gray-700 text-[14px] text-center py-4 px-4 rounded-full font-normal hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] hover:text-white">
            {buttonText}
          </Link>
        </div>
        <div className="w-full flex flex-col bg-transparent p-6 items-center text-center">
          <h2 className="font-bold text-2xl lg:text-4xl text-gray-800 mb-4">{heading}</h2>
          <p className="text-gray-700 text-xl font-light mb-4 text-balance">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;