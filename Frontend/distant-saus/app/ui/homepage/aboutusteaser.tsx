import React from 'react';
import Link from 'next/link';

const AboutUsTeaser: React.FC = () => {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                    About Our Story
                </h2>
                <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    <p>
                        Discover how we combine our passion for anime and basketball to create unique products. 
                        Our journey started from...
                    </p>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                    <div className="rounded-md shadow">
                        <Link href="/about"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Read Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsTeaser;
