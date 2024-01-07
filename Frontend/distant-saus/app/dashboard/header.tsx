'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaUserCircle } from 'react-icons/fa';
import StretchingSearchBar from '../ui/homepage/stretchingsearchbar';
import CartIcon from '../ui/products/cart-icon';
import CategoryNavbar from '../ui/products/category-navbar';
import SearchBarModal from '../ui/homepage/searchbarmodal';


const Header: React.FC = () => {
    const categories = ['Anime','Sports', 'Electronics', 'Books', 'Clothing', 'Sports', 'Home & Kitchen'];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const userInfo = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        role: 'Member'
    };

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        Distant Saus
                    </Link>
                </div>

                {/* Navigation Menu */}
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-300">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-gray-300">About
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-gray-300">Products
                            </Link>
                        </li>
                        {/* ... other navigation items ... */}
                    </ul>
                </div>

                {/* User and Cart Icons */}
                <div className="flex items-center space-x-4">
                    <div className="relative group">
                        <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300" />

                        {/* User Info Dropdown */}
                        <div className="absolute hidden group-hover:block bg-gray-800 p-4 rounded shadow-lg z-10 right-0 mt-2">
                            <h4 className="font-semibold">{userInfo.name}</h4>
                            <p>{userInfo.email}</p>
                            <p>{userInfo.role}</p>
                        </div>
                    </div>
                    <SearchBarModal />
                    <Link href="/cart">
                            <CartIcon />
                    </Link>
                </div>
            </nav>
            <CategoryNavbar 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
            />
        </header>
    );
};

export default Header;
