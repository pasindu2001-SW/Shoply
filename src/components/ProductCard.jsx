const ProductCard = ({ product, isFavorite, isRecommended, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Badge Container */}
      <div className="relative">
        {/* Product Image */}
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        {/* Recommended Badge */}
        {isRecommended && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            ⭐ Recommended
          </span>

        )}
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400'}`}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 grow flex flex-col">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          {product.category}
        </p>
        
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 grow">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        
        {/* Price */}
        <p className="text-2xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;