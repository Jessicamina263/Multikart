import React, { useState, useEffect } from 'react';

export default function Search({ openSearch, closeSearchbar }) {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [searchType, setSearchType] = useState('category');

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let product;

            if (searchType === 'category') {
                product = products.find(p => p.category.toLowerCase().includes(query.toLowerCase()));
            } else if (searchType === 'tag') {
                product = products.find(p => p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())));
            }

            if (product) {
                window.location.href = `/category/${product.category}`;
                closeSearchbar();
            } else {
                console.log('No product found');
            }
        }
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${openSearch ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
            <button onClick={closeSearchbar} className="absolute top-4 right-4 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
            </button>
            <div className="flex justify-center mt-20" style={{ marginTop: 450 }}>
                <select
                    value={searchType}
                    onChange={handleSearchTypeChange}
                    className="p-2 focus:outline-none w-1/4 text-center text-xl mb-4"
                >
                    <option value="category">Search by Category</option>
                    <option value="tag">Search by Tag</option>
                </select>
            </div>

            <div className="flex justify-center mt-2">
                <input
                    type="text"
                    className="p-2 focus:outline-none w-3/4 text-center text-xl"
                    placeholder={`Search by ${searchType}...`}
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div 
                className="bg-black mx-auto mt-2"
                style={{ width: '75%', height: 2 }}
            ></div>
        </div>
    );
}