import React from 'react';
import Link from 'next/link';

type CompactProductCardProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

const CompactProductCard: React.FC<CompactProductCardProps> = ({ id, name, price, imageUrl }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden bg-white">
            <img src={imageUrl} alt={name} className="w-full h-36 object-cover" />
            <div className="p-2">
                <h5 className="font-bold text-md mb-1 truncate">{name}</h5>
                <p className="text-gray-900 font-semibold">${price.toFixed(2)}</p>
                <Link href={`/products/${id}`} className="text-blue-500 hover:text-blue-700 text-sm">View Details
                </Link>
            </div>
        </div>
    );
};

export default CompactProductCard;
