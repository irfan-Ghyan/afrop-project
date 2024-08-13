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
    <div className="container mx-auto py-40 border-b-2 border-gray-200">
        <div className='flex '>
        <div className='w-1/2 border-2 border-[#ad8c19] hover:bg-[#ad8c19] hover:border-2 hover:border-[#ad8c19]'>
        <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={400}
        objectFit="cover"
       className=' p-4'
       
      />
     
      
        </div>
        
    <div className='w-1/2 flex flex-col justify-center items-start px-20'>
    <h1 className="text-4xl font-bold mb-4 text-[#ad8c19]  ">{product.title}</h1>
      <p className="mt-4 text-[18px] text-gray-700 text-balance ">{product.description}</p>
    
    </div>
    </div>
    </div>
  );
}
