import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import productsData from '../lib/data.json';

const ProductDetailPage: React.FC = () => {
    const router = useRouter();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Ensure the router has finished its initial work
        if (!router.isReady) return;

        // Find the product using the ID from the router
        const foundProduct = productsData.find(p => p.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [router.isReady, id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* More product details */}
        </div>
    );
};

export default ProductDetailPage;
