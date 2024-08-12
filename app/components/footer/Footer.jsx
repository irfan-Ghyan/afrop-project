'use client';

import React from 'react';
import Image from 'next/image';
import facebook from '../../../public/images/fb.png';
import linkedin from '../../../public/images/ld.png';
import twitter from '../../../public/images/tw.png';

const items = [
    {
        logo: '/images/logo.png',
        title: 'Sudan Office',
        description: 'Bahri Industrial Area Khartoum - Sudan, AL-Aghareeg Neighborhood, Posrtsudan-Sudan',
        email:'info@alfabrigaafrican.com',
        phone:'+249912324300 / +249118387933',
        website:'www.alfabrigaafrican.com'
    },
    {
        logo: '/images/logo.png',
        title: 'Dubai Office ',
        description: 'Burjuman Business Tower, office 908, Dubai,UAE',
        email:'info@afroharvestfoods.com',
        phone:'+971501801570',
        website:'www.alfabrigaafrican.com'
    },
    {
        logo: '/images/logo.png',
        title: 'India Office',
        description: 'C-15 Bhagwati Sadan, Tonk Road, Jaipur - 302015 India',
         email:'',
        phone:'+919829032232',
        website:''
    },

];

const Footer = () => {
    return (
        <div className="container mx-auto py-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="p-6 ">
                        <img src={item.logo} alt={item.title} className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-between items-start  p-4'>
                <div className="text-gray-200 mb-4 md:mb-0 px-8">
                    <p>© 2023 AFROHARVEST FOODSTUFF LLC. All rights reserved.</p>
                    <p>Design & Developed by IG</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Image src={facebook} height={20} width={20} alt="facbook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Image src={twitter} height={20} width={20} alt="twitter" />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Image src={linkedin} height={20} width={20} alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
