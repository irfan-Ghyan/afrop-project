import React from 'react';
import afro from '../../../public/images/arfo.png';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = ({ title, description, buttonText, title1, description1, imageSrc, imageAlt, heading, paragraph, paragraph1, paragraph2 }) => {
  return (
    <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-center items-center my-[60px]'>
            <Image src={afro} alt='bannar' width={600} height={350}/>
        </div>
        <div className="flex gap-8 justify-between">
        <div className="w-1/2 flex flex-col bg-transparent px-6 py-10">
          <h2 className="font-black text-4xl lg:text-6xl text-[#ad8c19] mb-4">{title}</h2>
          <p className="text-gray-700 text-4xl font-thin mb-4 text-balance">{description}</p>
          <Link href="/about" className="w-[200px] my-[20px] border-2 border-[#ad8c19] text-gray-700 text-[14px] text-center py-4 px-4 rounded-full font-normal hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] hover:text-white">
            {buttonText}
          </Link>
        </div>
        <div className="w-1/2 flex flex-col bg-transparent p-6 ">
          <h2 className="font-black text-2xl lg:text-4xl text-[#ad8c19] mb-4">{title1}</h2>
          <p className="text-gray-700 text-xl font-thin mb-4 text-balance">{description1}</p>
        </div>
        
      </div>
      <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('/images/slide.jpg')"  }} > 
        <div className='py-10 bg-white bg-opacity-30  '>
        <h2 className="font-bold text-2xl lg:text-6xl text-black mb-4 text-center">{heading}</h2>
          <div className='items-center text-center flex justify-between '>
         
          <div className='p-4 m-4 bg-black bg-opacity-30 border-4 border-[#ad8c19] border-opacity-50'>
            <h3 className="text-[#ad8c19] font-bold text-2xl mb-4 text-balance">High Quality Standards</h3>
            <p className="text-black text-xl font-light mb-4 text-balance">{paragraph}</p>
          </div>
          <div className=' p-4 m-4 bg-black bg-opacity-30 border-4 border-[#ad8c19] border-opacity-50'>
            <h3 className="text-[#ad8c19] text-2xl font-bold mb-4 text-balance">Smooth Delivery Process</h3>
            <p className="text-black text-xl font-light mb-4 text-balance">{paragraph1}</p>
          </div>
          <div className='p-4 m-4 bg-black bg-opacity-30 border-4 border-[#ad8c19] border-opacity-50'>
            <h3 className="text-[#ad8c19] text-2xl font-bold mb-4 text-balance"> Expert Team</h3>
            <p className="text-black text-xl font-light mb-4 text-balance">{paragraph2}</p>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutus;