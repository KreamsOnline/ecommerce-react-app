import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'; // Ensure you have react-icons installed
import Link from 'next/link';

const CartIcon: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Dummy cart data - replace with real data and logic
    const cartItems = [
        { id: 1, name: 'Product 1', quantity: 2 },
        { id: 2, name: 'Product 2', quantity: 1 },
        // ... more items ...
    ];

    const handleDelete = (itemId: number) => {
        // Delete item logic
        console.log('Delete item with id:', itemId);
    };

    const updateQuantity = (itemId: number, newQuantity: number) => {
        // Update quantity logic
        console.log('Update quantity for item id:', itemId, 'New quantity:', newQuantity);
    };

    return (
        <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <FaShoppingCart className="text-2xl cursor-pointer" />

            {showDropdown && (
                <div ref={dropdownRef} className="absolute bg-gray-800 p-4 rounded shadow-lg z-10 right-0 mt-2 w-64">
                    <h4 className="font-semibold">Cart Items</h4>
                    {cartItems.map(item => (
                        // Render each item with delete and quantity adjustment
                        <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                            <div>
                                <span className="font-medium">{item.name}</span>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={item.quantity} 
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    className="w-12 px-1 border rounded text-gray-700 mr-2"
                                />
                                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-600">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-center mt-4">
                        <Link href="/cart" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                                Go to Cart
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartIcon;
