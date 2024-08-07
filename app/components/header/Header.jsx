import React from 'react';
import SliderComponent from './slider/SliderComponent';
import Navbar from './navbar/Navbar'


const Header = () => {
  return (
    <header className="relative w-full ">
      <SliderComponent />
      <Navbar />
    </header>
  );
};

export default Header;
