'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import productsData from '../../lib/data.json';
import Image from 'next/image';
import Slider from 'react-slick';
import ProductActions from '@/app/ui/products/product-actions';
import CompactProductCard from '@/app/ui/products/compactproduct-card';
import CustomerReviews from '@/app/ui/products/customer-reviews';

const ProductDetailPage: React.FC = () => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const products = productsData.products
    const id = 2;
    const foundProduct = products.find(p => p.id === id);
    // Dummy data for existing reviews
    const reviews = [
        { id: 1, author: 'John Doe', comment: 'Great product!', rating: 4 },
        { id: 2, author: 'Jane Smith', comment: 'I love it!', rating: 5 },
        // Add more reviews as needed
    ];
    
    console.log(foundProduct);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // Width up to 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600, // Width up to 600px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // Width up to 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleAddToCart = () => {
        // Implement logic to add product to cart
        console.log('Added to cart:', product.id);
        // This can be a context method, Redux action, or any state management logic
    };

    useEffect(() => {
        // Ensure the router has finished its initial work
        if (!router) return;

        // Find the product using the ID from the router
        const foundProduct = products.find(p => p.id === id);
        if (foundProduct) {
            console.log(foundProduct);
            setProduct(foundProduct);
        }
    }, [router, id]);
    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pl-4">
                    <Image src={product.imageUrl} alt={product.name} width={500} height={500} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                    <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                    <p className="mb-2">Price: ${product.price.toFixed(2)}</p>
                    <p className="mb-4">{product.description}</p>
                    <div >
                        <ProductActions />
                    </div>
                    {/* Customer Reviews */}
                    <div className="container mx-auto max-w-screen-lg overflow-hidden m-4 p-9">
                    <Slider {...settings}>
                        {products.map(product => (
                            <div key={product.id} className="px-2">
                                <CompactProductCard {...product} />
                            </div>
                        ))}
                    </Slider>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            {/* Related Products Section */}
            <CustomerReviews reviews={reviews}/>
        </div>
    );
};

export default ProductDetailPage;
