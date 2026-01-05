const BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} 
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    
    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw so component can handle it
  }
};

/**
 * Fetch all categories from the API
 * @returns {Promise<Array>} Array of category strings
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};