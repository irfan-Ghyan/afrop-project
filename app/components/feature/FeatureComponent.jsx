import Image from 'next/image';
import React from 'react';

const FeatureSection = () => {
  const title = "We Share, and We Care";
  const description = "At Afroharvest, the natural output is not just considered stock; it is also not just the business in which we wish to participate. In addition to focusing on growth, we strongly emphasize promoting sustainable agriculture through the promotion of fair trade and environmental ethics.";
  const imageUrl = "/images/bg.png"; 

  return (
    <div className="relative container mx-auto px-4">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4 text-xl text-gray-600">{description}</p>
      </div>
      <div className="w-full">
        <Image
          src={imageUrl}
          alt="Scenic view"
          layout="responsive"
          width={700} 
          height={467} 
          objectFit="cover"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
