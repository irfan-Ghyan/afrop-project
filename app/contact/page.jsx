import React from 'react';
import ContactForm from '../components/contactform/ContactForm'; 

const Page = () => {
  return (
    <div>
      <div className='container mx-auto px-4 pt-20'>
        <h1 className='text-[32px] md:text-[54px] mb-4 text-center font-black'>SERVICE AREA & CONTACT
        </h1>
        <div className='flex '>
        <div className="w-1/2 map-container mx-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15367.742330898567!2d32.54387357746031!3d15.648418371969955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e928bd4ffd6a5%3A0x5c3bdf5dd1597703!2sKhartoum%20North%20Light%20Industrial%20Area%2C%20Khartoum%20North%2C%20Sudan!5e0!3m2!1sen!2sae!4v1723041147404!5m2!1sen!2sae"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-1/2 map-container mx-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.546950372501!2d55.299113276962494!3d25.252180029468654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43000ab4b8ed%3A0xb841c92a2428953c!2sBurjuman%20Business%20Tower!5e0!3m2!1sen!2sae!4v1723041714388!5m2!1sen!2sae" 
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
        </div>
    </div>
    <ContactForm />
    </div>
  )
}
export default Page;
