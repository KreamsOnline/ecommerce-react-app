import React from 'react';
import Link from 'next/link';

// Define the type for a single product
type Product = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    link: string;
};

// Mock data for demonstration. Replace with real data from your API or backend.
const products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', imageUrl: '/images/product1.jpg', link: '/products/1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', imageUrl: '/images/product2.jpg', link: '/products/2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', imageUrl: '/images/product3.jpg', link: '/products/3' },
    // Add more products as needed.
];

const FeaturedProducts: React.FC = () => {
    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-2xl text-center font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <Link href={product.link} className="text-blue-500 hover:text-blue-700 transition duration-300">View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
