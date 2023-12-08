import React, { useState } from 'react';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([
        // Dummy reviews data
        { id: 1, author: 'John Doe', comment: 'Great product!', rating: 4 },
        { id: 2, author: 'Jane Smith', comment: 'I love it!', rating: 5 },
    ]);
    const [sortOption, setSortOption] = useState('Most Recent');

    const ratingsSummary = {
        5: 12, // 12 reviews with 5 stars
        4: 8,  // 8 reviews with 4 stars
        3: 5,  // and so on...
        2: 2,
        1: 1
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
        ));
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        // Add sorting logic here
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between items-center mb-4">
                {/* Overall Rating */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 p-2 border rounded max-h-64">
                    <h2 className="text-2xl font-bold">Overall Rating</h2>
                    {renderStars(4)} {/* Replace with dynamic overall rating */}
                    {/* Additional content */}
                </div>

                {/* Ratings Breakdown */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 p-2 border rounded max-h-64 overflow-auto">
                    <h2 className="text-2xl font-bold">Ratings Breakdown</h2>
                    <div>
                        {Object.keys(ratingsSummary).reverse().map(star => (
                            <div key={star} className="flex items-center">
                                {renderStars(parseInt(star))}
                                <span className="ml-2">({ratingsSummary[star]} reviews)</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Write a Review Button */}
                <div className="w-full md:w-1/3 text-right p-2 border rounded max-h-64 flex justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Sorting Options */}
            <div className="mb-4">
                <label htmlFor="sort-reviews" className="mr-2">Sort by:</label>
                <select id="sort-reviews" value={sortOption} onChange={handleSortChange}>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Highest Rating">Highest Rating</option>
                    <option value="Lowest Rating">Lowest Rating</option>
                </select>
            </div>

            {/* Reviews */}
            <div>
                {reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-200 py-2">
                        <div className="flex items-center gap-2 mb-1">
                            {renderStars(review.rating)}
                        </div>
                        <p className="font-semibold">{review.author}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
