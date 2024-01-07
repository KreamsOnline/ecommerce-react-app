import React, { useState } from 'react';

const ProductActions: React.FC = () => {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [shippingOpen, setShippingOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    const handleAddToCart = () => {
        // Logic to add product to cart
    };

    return (
        <div>
            {/* Add to Cart Button */}
            <button 
                onClick={handleAddToCart} 
                className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Add to Cart
            </button>

            {/* Product Details Dropdown */}
            <div className="mt-2">
                <button onClick={() => setDetailsOpen(!detailsOpen)} className="w-full text-white py-2 px-4 bg-gray-800 rounded hover:bg-blue-700">
                    Product Details
                </button>
                {detailsOpen && <div className="p-2 border border-t-0">Some details about the product...</div>}
            </div>

            {/* Shipping & Returns Dropdown */}
            <div className="mt-2">
                <button onClick={() => setShippingOpen(!shippingOpen)} className="w-full text-white py-2 px-4 bg-gray-800 rounded hover:bg-blue-700">
                    Shipping & Returns
                </button>
                {shippingOpen && <div className="p-2 border border-t-0">Shipping and return information...</div>}
            </div>

            {/* Share Dropdown */}
            <div className="mt-2">
                <button onClick={() => setShareOpen(!shareOpen)} className="w-full text-white py-2 px-4 bg-gray-800 rounded hover:bg-blue-700">
                    Share
                </button>
                {shareOpen && <div className="p-2 border border-t-0">Share options...</div>}
            </div>
        </div>
    );
};

export default ProductActions;
