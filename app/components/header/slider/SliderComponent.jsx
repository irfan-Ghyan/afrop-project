'use client'

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { src: '/images/slide.jpg', title: 'AFROHARVEST FOODSTUFF LLC', description: 'EXPORTER OF HIGH-QUALITY SUDANESE ORIGIN COMMODITIES AND CROPS' },
  { src: '/images/slide1.jpg', title: 'AFROHARVEST FOODSTUFF', description: 'EXPORTER OF HIGH-QUALITY SUDANESE ORIGIN COMMODITIES AND CROPS' },
  { src: '/images/slide2.jpg', title: 'AFROHARVEST ', description: 'EXPORTER OF HIGH-QUALITY SUDANESE ' },
];

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full h-full">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[600px] relative">
            <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className='container mx-auto px-4'>
                <span className="text-white text-2xl font-thin py-2 bg-[#ad8c19] lg:px-4 bg-opacity-50 ">{slide.title}</span>
                <div className='mt-12'><span className="text-white text-2xl lg:text-balance font-thin py-2 bg-[#ad8c19] px-4 bg-opacity-50">{slide.description}</span></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute right-0 top-3/4 z-20 flex flex-col items-center space-y-4">
        <button onClick={prevSlide} className="bg-white bg-opacity-30 w-[15px] h-[15px] text-black rounded-full border-1 border-[#ad8c19] p-2 hover:w-[40px] hover:bg-[#ad8c19]"></button>
        <button onClick={nextSlide} className="bg-white bg-opacity-30 w-[15px] h-[15px] text-black rounded-full border-1 border-[#ad8c19] p-2 hover:w-[40px] hover:bg-[#ad8c19]"></button>
      </div>
    </div>
  );
};

export default SliderComponent;
