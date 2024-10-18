import React, { useState } from 'react';
import styles from './filtr.module.css';

function Filter({ onFilterChange }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [company, setCompany] = useState('');
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState(0);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleCompanyChange(event) {
    setCompany(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSearch() {
    onFilterChange({ search, category, company, sort, price });
  }


  function handleReset() {
    setSearch('');
    setCategory('all');
    setCompany('');
    setSort('');
    setPrice(0);
    onFilterChange({ search: '', category: 'all', company: '', sort: '', price: 0 });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <span>
            <p>Search Product</p>
            <input type="text" value={search} onChange={handleSearchChange} />
          </span>

          <span>
            <p>Select Category</p>
            <select value={category} onChange={handleCategoryChange}>
              <option value="all">all</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Kids">Kids</option>
              <option value="Sofas">Sofas</option>
              <option value="Beds">Beds</option>
            </select>
          </span>

          <span>
            <p>Select Company</p>
            <select value={company} onChange={handleCompanyChange}>
              <option value="">all</option>
              <option value="Modenza">Modenza</option>
              <option value="Luxora">Luxora</option>
              <option value="Artifex">Artifex</option>
              <option value="Comfora">Comfora</option>
              <option value="Homestead">Homestead</option>
            </select>
          </span>

          <span>
            <p>Sort By</p>
            <select value={sort} onChange={handleSortChange}>
              <option value="az">a-z</option>
              <option value="za">z-a</option>
              <option value="high">high</option>
              <option value="low">low</option>
            </select>
          </span>
        </div>
        <div className={styles.priceSection}>
          <div className={styles.sliderContainer}>
            <p>Select Price</p>
            <span className={styles.price}>${price}.00</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              className={styles.slider}
              onChange={handlePriceChange}
            />
            <div className={styles.rangeLabel}>
              <span>0</span>
              <span>Max : $1,000.00</span>
            </div>
          </div>
          <div className={styles.extraOptions}>
            <label>
              Free Shipping
              <input type="checkbox" />
            </label>
            <button className={`${styles.searchButton}`} onClick={handleSearch}>SEARCH</button>
            <button className={`${styles.resetButton}`} onClick={handleReset}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
