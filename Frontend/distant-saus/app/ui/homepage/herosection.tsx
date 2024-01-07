import React from 'react';
import Link from 'next/link';

type HeroSectionProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, buttonLink }) => {
    return (
        <div className="hero-section bg-stretch bg-center h-screen" >
            <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl mb-8">{description}</p>
                <Link href={buttonLink}>
                    <span className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {buttonText}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
