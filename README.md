# Shoply - React + Vite

A modern, responsive product listing application built with React and Vite, featuring real-time search, filtering, sorting, and favorites management.
- Live Demo: https://your-app.Versel.app
- GitHub Repo: https://github.com/pasindu2001-SW/Shoply

## Features

- **Product Browsing**: Browse products from the Fake Store API with detailed information including images, ratings, and prices
- **Search Functionality**: Real-time search across product titles
- **Category Filtering**: Filter products by category with an "All Categories" option
- **Price Sorting**: Sort products by price in ascending or descending order
- **Favorites System**: Save favorite products to browser localStorage for persistence
- **Recommendations**: Smart recommendation badges for products with ratings > 4 or below-average pricing
- **Responsive Design**: Fully responsive UI that adapts to mobile, tablet, and desktop screens using Tailwind CSS
- **Loading States**: Smooth loading spinners and error handling with retry functionality
- **Smooth Animations**: Fade-in and scale animations for enhanced UX

## Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1 with @tailwindcss/vite
- **Data Source**: Fake Store API (https://fakestoreapi.com)
- **Code Quality**: ESLint with React best practices

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
├── pages/              # Page components
│   └── ProductListing.jsx
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js
├── services/           # API communication
│   └── api.js
├── utils/              # Helper functions
│   └── helpers.js
├── assets/             # Images and static files
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/pasindu2001-SW/Shoply.git
cd Shoply

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint to check code quality
npm run lint
```

## Key Features Explained

### Custom Hooks
- **`useLocalStorage`**: Syncs component state with browser localStorage
- **`useDarkMode`**: Manages system preference detection

### Helper Functions
- **`filterProducts`**: Filter by search term and category
- **`sortProducts`**: Sort products by price
- **`calculateAveragePrice`**: Calculate average price for recommendations
- **`isRecommended`**: Determine if product meets recommendation criteria

### API Integration
- **`fetchProducts`**: Fetch all products from Fake Store API
- **`fetchCategories`**: Fetch available product categories

## AI Tools Usage

AI tools (claude ai) were used during development to assist with:
- Structuring React components and folder organization
- Optimizing state management logic for search, filter, and sorting
- Improving UI/UX with Tailwind CSS best practices
All implementation decisions and final code were reviewed and customized by the developer

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
