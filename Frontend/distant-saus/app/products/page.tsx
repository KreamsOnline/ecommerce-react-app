'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import productsData from '../lib/data.json';
import Pagination from '../ui/products/pagination';
import ProductCard from '../ui/products/product-card';
import CategoryNavbar from '../ui/products/category-navbar';
// Import other necessary components and hooks

const ProductsPage: React.FC = () => {
   

    // Assume products data is fetched from API or backend
    const products = productsData.products; // This should be your products array
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10; // This should be dynamically determined based on total products

    const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch products for the new page
  };

    return (
        <div>
                        
            {/* Main Content Area */}
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </div>
                {/* Pagination Component */}
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default ProductsPage;
