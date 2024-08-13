import React from "react";
import Aboutus from "./components/aboutus/Aboutus";
import BusinessCategory from "./components/businesscategory/Businesscategory";
import FeatureComponent from './components/feature/FeatureComponent';
import Card from './components/card/Card';
import ViewProducts from './components/viewproducts/ViewProducts';
import CompaniesSlider from "./components/compinesslider/CompaniesSlider";
import ContactForm from "./components/contactform/ContactForm";

export default function Home() {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Exporter of high-quality Sudanese origin commodities and crops',
    buttonText: 'MORE ABOUT',
    imageSrc: '/images/ceo.png',
    imageAlt: 'Example Image',
    heading: 'WHY CHOOSING AFROHARVEST?',
    paragraph:'Welcome to Afroharvest, where excellence meets nourishment. As a leading enterprise in the heart of Sudan, we take immense pride in our role as specialists in the export of high-quality Sudanese origin commodities and crops. Our commitment to quality, sustainability, and innovation sets us apart in the agricultural and food production industry',};

  const items = [
    '/images/img4.jpg',
    '/images/img1.jpg',
    '/images/img10.jpg',
    '/images/img13.jpg',
    '/images/img7.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
  ];


  return (
    <div>
    {/* <BusinessCategory /> */}
    <Aboutus {...data}/>
    <FeatureComponent />
    <div className="mt-20"><h1 className="text-center text-4xl font-black">OUR PRODUCTS</h1>
    <Card />
    </div>
    <ViewProducts />
    <CompaniesSlider items={items} />
    <ContactForm />
    </div>
  );
}
