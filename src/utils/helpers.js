/**
 * Logic: Rating > 4 OR price below average
 * @param {Object} product 
 * @param {number} avgPrice 
 * @returns {boolean}
 */
export const isRecommended = (product, avgPrice) => {
  return product.rating.rate > 4 || product.price < avgPrice;
};

/**
 * Calculate average price from array of products
 * @param {Array} products 
 * @returns {number}
 */
export const calculateAveragePrice = (products) => {
  if (!products || products.length === 0) return 0;
  
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return total / products.length;
};

/**
 * Filter products by search term and category
 * @param {Array} products 
 * @param {string} searchTerm 
 * @param {string} category 
 * @returns {Array} Filtered products
 */
export const filterProducts = (products, searchTerm, category) => {
  return products.filter(product => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    

    const matchesCategory = category === 'all' || product.category === category;
    
    return matchesSearch && matchesCategory;
  });
};

/**
 * Sort products by price
 * @param {Array} products 
 * @param {string} sortOrder 
 * @returns {Array} Sorted products (new array)
 */
export const sortProducts = (products, sortOrder) => {

  const sorted = [...products];
  
  if (sortOrder === 'asc') {
    return sorted.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    return sorted.sort((a, b) => b.price - a.price);
  }
  
  return sorted; 
};