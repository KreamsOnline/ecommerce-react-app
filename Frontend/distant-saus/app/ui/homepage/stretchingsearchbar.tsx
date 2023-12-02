import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Ensure you have react-icons installed

const StretchingSearchBar: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery); // Implement your search logic here
    };

    return (
        <div className="flex items-center border rounded-md overflow-hidden">
            <FaSearch className="mx-2 text-gray-400" />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="flex-grow transition-all duration-300 ease-in-out px-2 py-1 focus:outline-none"
            />
            <div
                className={`transition-all duration-300 ease-in-out ${isFocused ? 'max-w-xs' : 'max-w-0'}`}
            >
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 h-full transition duration-300"
                    style={{ transition: 'background-color 300ms' }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default StretchingSearchBar;
