import React, { useEffect, useState } from 'react';

const Sidebar = ({ isOpen, closeSidebar, onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-80 h-full bg-white text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`} style={{ zIndex: 1500 }} >
            <button onClick={closeSidebar}>
                <div className="flex items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-current text-black">
                        <path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                    <button className="ml-2 text-2xl">Back</button>
                </div>
            </button>
            <div className="h-0.5 w-80 bg-gray-200"></div>
            <div className="p-2">
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="py-2 text-gray-800 ml-7">
                        <button onClick={() => {onCategorySelect(category.slug); closeSidebar();}} className="text-black hover:text-gray-700">{category.name}</button>
                    </li>
                ))}
            </ul>

            </div>
        </div>
    );
};

export default Sidebar;
