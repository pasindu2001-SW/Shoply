const FilterBar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  sortOrder, 
  onSortChange 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <label htmlFor="category" className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Filter */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
        >
          <option value="none">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;