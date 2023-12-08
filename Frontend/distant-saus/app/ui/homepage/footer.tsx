import React from 'react';
import Link from 'next/link';
import FollowUs from './follow-us';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className='p-4 pt-0'>
                <FollowUs />
            </div>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-gray-400">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <ul>
                            <li><a href="https://facebook.com" className="hover:text-gray-400">Facebook</a></li>
                            <li><a href="https://twitter.com" className="hover:text-gray-400">Twitter</a></li>
                            <li><a href="https://instagram.com" className="hover:text-gray-400">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <p>123 Anime Street, Tokyo, Japan</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@example.com</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>© {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
