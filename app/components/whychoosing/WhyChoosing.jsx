import React from 'react';


const WhyChoosing = ({ heading, paragraph, paragraph1, paragraph2 }) => {
  return (
    <div className='container mx-auto px-4 py-6'>
        <div className="w-full bg-black bg-transparent p-8" style={{ backgroundImage: "url('/images/slide.jpg')"  }} >
          <h2 className="font-bold text-2xl lg:text-4xl text-white mb-4">{heading}</h2>
          <div className='items-center text-center flex justify-between py-10'>
          <div>
            <h3 className="text-white font-bold text-2xl mb-4 text-balance">High Quality Standards</h3>
            <p className="text-white text-xl font-light mb-4 text-balance">{paragraph}</p>
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 text-balance">Smooth Delivery Process</h3>
            <p className="text-white text-xl font-light mb-4 text-balance">{paragraph1}</p>
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 text-balance"> Expert Team</h3>
            <p className="text-white text-xl font-light mb-4 text-balance">{paragraph2}</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default WhyChoosing;