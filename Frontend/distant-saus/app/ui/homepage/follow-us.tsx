import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FollowUs = () => {
    return (
        <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <FaFacebook size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    <FaTwitter size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                    <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
};

export default FollowUs;
