import logo1 from '../assets/logo1.png';
import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { 
  filterProducts, 
  sortProducts, 
  calculateAveragePrice, 
  isRecommended 
} from '../utils/helpers';

import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ProductListing = () => {
  // State for products and categories
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for filtering/sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');
  
  // State for favorites (persisted in localStorage)
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  
  // Calculate average price for recommendation logic
  const avgPrice = calculateAveragePrice(products);

  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch both products and categories in parallel
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Toggle favorite status
  const handleToggleFavorite = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Retry loading data
  const handleRetry = () => {
    setProducts([]);
    setCategories([]);
    setLoading(true);
    setError(null);
    
    // Trigger re-fetch by changing  
    window.location.reload();
  };

  // Process products: filter, then sort
  const filteredProducts = filterProducts(products, searchTerm, selectedCategory);
  const displayProducts = sortProducts(filteredProducts, sortOrder);

  // Show loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error state
  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 min-h-17.5 lg:content-center">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full px-6 sm:px-8 lg:px-12 py-8 lg:py-12 gap-6">

          {/* Title */}
          <img src={logo1} alt="Product Store Logo" className="h-6 max-w-30 w-auto sm:h-8 sm:max-w-35 md:h-12 md:max-w-45 lg:h-20 lg:max-w-60 transition-transform duration-300 ease-out hover:scale-105"/>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full lg:w-auto">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <FilterBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        {/* Results Summary */}
        <div className="mb-6 text-sm text-gray-600 animate-fade-in">
          Showing {displayProducts.length} of {products.length} products
          {favorites.length > 0 && ` • ${favorites.length} favorite(s)`}
        </div>

        {/* Product Cards */}
        {displayProducts.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {displayProducts.map((product, index) => (
              <div key={product.id} className="w-full sm:w-37.5 md:w-75 lg:w-87.5 animate-fade-in-up transition-transform duration-300 ease-out hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}> 
                <ProductCard
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  isRecommended={isRecommended(product, avgPrice)}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-500 text-lg">No products found</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-500 hover:text-blue-600 underline  transition-colors"
            >
              Clear the Search
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductListing;