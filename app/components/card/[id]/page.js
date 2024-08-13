import { productDetails } from '../../../../data/data';
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
    <div className="container mx-auto px-4 py-10 ">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={400}
        objectFit="cover"
      />
      <p className="mt-4 text-xl text-gray-700">{product.description}</p>
    </div>
  );
}
