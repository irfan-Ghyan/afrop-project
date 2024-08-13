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
    title1: 'WHY CHOOSING AFROHARVEST?',
    description1: 'Welcome to Afroharvest, Where excellence meets nourishment. As a leading enterprise in the heart of Sudan, we take immense pride in our role as specialists in the export of high quality Sudanese origin commodities and crops. Our commitment to quality, sustainability, and innovation sets us apart in the agricultural and food production indurty.',
    buttonText: 'MORE ABOUT',
    imageSrc: '/images/ceo.png',
    imageAlt: 'Example Image',
    heading: 'WHY CHOOSING AFROHARVEST?',
    paragraph:'We are committed to delivering top-notch products by adhering to rigous quality control processes. Our focus on quality ensures that evry product meets international standards.',
    paragraph1:'Our effiecient logistics and supply chain management gurantee timely and reliable delivery, minimizing and potential disryptions.',
    paragraph2:'Our experienced team brings expertise and dedication to every aspect of our operations, ensuring that our clients receive exceptional service.'};
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
    {/* <WhyChoosing /> */}
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
