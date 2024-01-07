import React from 'react';

// Mock data for customization options
const customizationOptions = [
    {
        id: 1,
        title: 'Custom Anime T-shirts',
        description: 'Choose your favorite anime character and T-shirt color.',
        imageUrl: '/images/custom-tshirt.jpg'
    },
    {
        id: 2,
        title: 'Personalized Basketball Jerseys',
        description: 'Customize your jersey with your name and number.',
        imageUrl: '/images/custom-jersey.jpg'
    },
    {
        id: 3,
        title: 'Anime-themed Phone Cases',
        description: 'Select an anime and create your unique phone case design.',
        imageUrl: '/images/custom-phonecase.jpg'
    },
    // Add more options as needed
];

const CustomizationShowcase: React.FC = () => {
    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-2xl text-center font-bold mb-6">Customization Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {customizationOptions.map(option => (
                    <div key={option.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                        <img src={option.imageUrl} alt={option.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                            <p className="text-gray-700">{option.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomizationShowcase;
