import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        Your Logo
                    </Link>
                </div>

                {/* Navigation Menu */}
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300">Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:text-gray-300">Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/customization"
                            className="hover:text-gray-300">Customization
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-gray-300">Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">Contact
                        </Link>
                    </li>
                </ul>

                {/* Icons */}
                <div className="space-x-4">
                    {/* Icons here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
