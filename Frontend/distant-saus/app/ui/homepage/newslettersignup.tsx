import React, { useState } from 'react';

const NewsletterSignUp: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement the logic to handle the subscription using the email state
        console.log('Subscribed with:', email);
        // Reset the email field after submission or handle it as per your logic
        setEmail('');
    };

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Stay Updated with Our Newsletter
                </h2>
                <p className="mb-6 text-gray-600">
                    Subscribe to receive the latest news, updates, and special offers.
                </p>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input 
                        type="email" 
                        className="px-4 py-2 w-1/3 border rounded-l-lg focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-r-lg hover:bg-blue-700 transition duration-150 ease-in-out">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSignUp;