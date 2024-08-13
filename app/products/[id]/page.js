import { productDetails } from '../../../data/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(productDetails).map((id) => ({
    id,
  }));
}

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = productDetails[id];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-40 border-b-2 border-gray-200">
        <div className='flex'>
        <div className='w-1/2 '>
        <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={400}
        objectFit="cover"
       className=' '
       
      />
        </div>
        
    <div className='w-1/2 py-10'>
    <h1 className="text-4xl font-bold mb-4 text-[#ad8c19]">{product.title}</h1>
      
      <p className="mt-4 text-[18px] text-gray-700 text-balance">{product.description}</p>
    </div>
    </div>
    </div>
  );
}
