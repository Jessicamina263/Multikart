import React, { useState } from 'react';
import '../../pages/styles.css';

const SortAndFiltersBar = ({
  isSortBarOpen,
  toggleSortBar,
  onSortChange,
  isFiltersBarOpen,
  toggleFiltersBar,
  onFilterChange,
}) => {
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatingRanges, setSelectedRatingRanges] = useState([]);

  const priceRanges = ['0$-250$', '250$-500$', '500$-750$', '750$-1000$', '1000$+', '2000$+'];
  const ratingRanges = ['0-1', '1-2', '2-3', '3-4', '4+'];

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handlePriceChange = (range) => {
    const updatedPriceRanges = selectedPriceRanges.includes(range)
      ? selectedPriceRanges.filter((r) => r !== range)
      : [...selectedPriceRanges, range];
    setSelectedPriceRanges(updatedPriceRanges);
    onFilterChange({ priceRanges: updatedPriceRanges, ratingRanges: selectedRatingRanges });
  };

  const handleRatingChange = (range) => {
    const updatedRatingRanges = selectedRatingRanges.includes(range)
      ? selectedRatingRanges.filter((r) => r !== range)
      : [...selectedRatingRanges, range];
    setSelectedRatingRanges(updatedRatingRanges);
    onFilterChange({ priceRanges: selectedPriceRanges, ratingRanges: updatedRatingRanges });
  };

  return (
    <>
      {isSortBarOpen && <div className="overlay" onClick={toggleSortBar}></div>}
      <div className={`sort-bar ${isSortBarOpen ? 'open' : ''} w-80 h-full`}>
        <h2 style={{ fontWeight: 'bold' }}>Sort Options</h2>
        <div className="sort-options">
          <div className="sort-option">
            <button className="sort-btn" onClick={() => handleDropdownToggle('name')}>
              <h1 style={{ fontWeight: 'bold' }}>Name</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="chevron-icon" fill="black">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            {activeDropdowns['name'] && (
              <ul className="dropdown">
                <li onClick={() => onSortChange('A-Z')}>From A to Z</li>
                <li onClick={() => onSortChange('Z-A')}>From Z to A</li>
              </ul>
            )}
          </div>
          <hr />
          <div className="sort-option">
            <button className="sort-btn" onClick={() => handleDropdownToggle('price')}>
              <h1 style={{ fontWeight: 'bold' }}>Price</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="chevron-icon" fill="black">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            {activeDropdowns['price'] && (
              <ul className="dropdown">
                <li onClick={() => onSortChange('priceLow')}>From Lowest to Highest</li>
                <li onClick={() => onSortChange('priceHigh')}>From Highest to Lowest</li>
              </ul>
            )}
          </div>
          <hr />
          <div className="sort-option">
            <button className="sort-btn" onClick={() => handleDropdownToggle('rating')}>
              <h1 style={{ fontWeight: 'bold' }}>Rating</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="chevron-icon" fill="black">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            {activeDropdowns['rating'] && (
              <ul className="dropdown">
                <li onClick={() => onSortChange('ratingLow')}>From Lowest to Highest</li>
                <li onClick={() => onSortChange('ratingHigh')}>From Highest to Lowest</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {isFiltersBarOpen && <div className="overlay" onClick={toggleFiltersBar}></div>}
      <div className={`filters-bar ${isFiltersBarOpen ? 'open' : ''} w-80 h-full`}>
        <h2 style={{ fontWeight: 'bold' }}>Filter Options</h2>
        <div className="filters">
          <div className="filter">
            <h3 style={{ fontWeight: 'bold' }}>Price Ranges</h3>
            <ul>
              {priceRanges.map((range) => (
                <li key={range} onClick={() => handlePriceChange(range)}>{range}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="filter">
            <h3 style={{ fontWeight: 'bold' }}>Rating Ranges</h3>
            <ul>
              {ratingRanges.map((range) => (
                <li key={range} onClick={() => handleRatingChange(range)}>{range}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortAndFiltersBar;
