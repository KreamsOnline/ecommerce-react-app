import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBarModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearchBar = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggleSearchBar} className="text-lg">
                <FaSearch />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50">
                    <div className="flex justify-center items-center h-full">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="p-2 w-1/2"
                            autoFocus
                        />
                        <button onClick={toggleSearchBar} className="ml-2 text-white">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBarModal;
