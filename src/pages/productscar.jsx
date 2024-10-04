import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './custom.css';
import SortAndFiltersBar from '../components/homecomponents/sortandfiltersbars';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6, slidesToSlide: 6 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ProductsCarousel = ({ onAddToCart, selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSortBarOpen, setSortBarOpen] = useState(false);
  const [isFiltersBarOpen, setFiltersBarOpen] = useState(false);
  const [filters, setFilters] = useState({ priceRanges: [], ratingRanges: [] });

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts(selectedCategory || 'all');
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    loadProducts();
  }, [selectedCategory]);

  const fetchProducts = async (category) => {
    const response = await fetch(`https://dummyjson.com/products${category !== 'all' ? `?category=${category}` : ''}`);
    const data = await response.json();
    return data.products;
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product =>
        filters.priceRanges.some(range => {
          const [min, max] = range.split('$').join('').split('-');
          return (!min || product.price >= parseInt(min)) && (!max || product.price <= parseInt(max));
        })
      );
    }

    if (filters.ratingRanges.length > 0) {
      filtered = filtered.filter(product =>
        filters.ratingRanges.some(range => {
          const [min, max] = range.split('-');
          return (!min || product.rating >= parseFloat(min)) && (!max || product.rating <= parseFloat(max || Infinity));
        })
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [filters, products]);

  const toggleSortBar = () => setSortBarOpen(!isSortBarOpen);
  const toggleFiltersBar = () => setFiltersBarOpen(!isFiltersBarOpen);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className='flex' style={{ marginBottom: 50, marginLeft: 755 }}>
        <button className='filtersort flex' style={{ marginRight: 10 }} onClick={toggleSortBar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6">
            <path fill="black" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
          </svg>
          Sort
        </button>
        <button className='filtersort flex' style={{ marginRight: 10 }} onClick={toggleFiltersBar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6" style={{ marginRight: 10 }}>
            <path fill="black" d="M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.2L336 284.3V432c0 10.6-5.5 20.4-14.5 26.1l-96 56c-9.9 5.8-22.1 5.8-32 0s-14.5-16.4-14.5-26.1V284.3L9.1 97.1C-.7 85.4-2.6 70.8 3.9 54.9z"/>
          </svg>
          Filters
        </button>
      </div>

      <SortAndFiltersBar isSortBarOpen={isSortBarOpen} isFiltersBarOpen={isFiltersBarOpen} toggleSortBar={toggleSortBar} toggleFiltersBar={toggleFiltersBar} onFilterChange={handleFilterChange}/>
      <Carousel responsive={responsive} className="mb-8 carousel">
        {filteredProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.thumbnail} alt={product.title} className="rounded mx-auto" />
            <p className="text-yellow-500" style={{ marginTop: 30 }}>Rating: {product.rating}⭐</p>
            <h2 className="text-lg text-gray-400" style={{ marginTop: 10 }}>{product.title}</h2>
            <div className="flex justify-center" style={{ marginTop: 10 }}>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <p className="text-gray-400" style={{ textDecorationLine: 'line-through' }}>${(product.price * 2).toFixed(2)}</p>
            </div>
            <div className="product-icons">
              <svg className="product-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#595959" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
              </svg>
              <svg className="product-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#595959" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
              <svg className="product-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#595959" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/>
              </svg>
            </div>
            <button className='product-button' onClick={() => onAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductsCarousel;
