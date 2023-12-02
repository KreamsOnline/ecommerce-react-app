import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-gray-900 font-semibold">${price.toFixed(2)}</p>
                <Link href={`/products/${id}`} className="text-blue-500 hover:text-blue-700 transition duration-300">View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
