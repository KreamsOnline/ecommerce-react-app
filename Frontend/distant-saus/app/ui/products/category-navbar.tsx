import React from 'react';

interface CategoryNavbarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="bg-gray-100">
            <nav className="container mx-auto flex justify-center overflow-x-auto whitespace-nowrap py-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 py-2 font-medium ${selectedCategory === category ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default CategoryNavbar;
