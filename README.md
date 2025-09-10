# Property Deals React App

A modern, responsive React.js application for browsing and filtering property deals. Built with Vite, Tailwind CSS, and following best practices for component architecture.

## Features

- **Search Functionality**: Search deals by title, location, or description
- **Advanced Filtering**: Filter by property type, price range, amenities, and availability
- **Sorting Options**: Sort by price, rating, featured status, or newest first
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, modern interface with smooth animations
- **Modular Architecture**: Well-structured, reusable components

## Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language (no TypeScript)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DealCard.jsx    # Individual deal card component
│   ├── FilterPanel.jsx # Filter sidebar component
│   ├── SearchBar.jsx   # Search input component
│   ├── SortDropdown.jsx # Sorting dropdown component
│   └── ResultsHeader.jsx # Results header component
├── data/               # Static data and mock data
│   └── dealsData.js    # Deal listings and filter options
├── hooks/              # Custom React hooks
│   └── useDealsFilter.js # Filter and search logic hook
├── utils/              # Utility functions
│   └── filterUtils.js  # Filtering and sorting utilities
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` to view the application

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Search
- Real-time search across deal titles, locations, and descriptions
- Clear search functionality
- Search results update instantly

### Filtering
- **Property Type**: Office, Retail, Industrial, Residential, Restaurant, Medical
- **Price Range**: Multiple price range options
- **Amenities**: Checkbox selection for various amenities
- **Availability**: Filter by available, unavailable, or featured deals

### Sorting
- Featured deals first (default)
- Price: Low to High / High to Low
- Highest Rated
- Newest First

### Responsive Design
- Mobile-first approach
- Collapsible filter sidebar on mobile
- Responsive grid layout
- Touch-friendly interface

## Component Architecture

The application follows a modular component architecture:

- **DealCard**: Displays individual deal information with image, pricing, amenities, and ratings
- **FilterPanel**: Handles all filtering options with clear visual feedback
- **SearchBar**: Provides search input with clear functionality
- **SortDropdown**: Allows users to sort results by different criteria
- **ResultsHeader**: Shows result count and sorting options

## Custom Hooks

- **useDealsFilter**: Manages all filter state, search functionality, and result processing

## Data Structure

The application uses mock data with the following structure:
- Deal information including title, location, price, type, amenities
- Image URLs from Unsplash for visual appeal
- Rating and review information
- Availability and featured status

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Performance

- Optimized with React hooks for efficient re-rendering
- Lazy loading ready (can be easily added)
- Minimal bundle size with Vite
- Fast development server with HMR

## Future Enhancements

- Add pagination for large datasets
- Implement user authentication
- Add favorites/bookmarking functionality
- Integrate with real estate APIs
- Add map view for location-based browsing
- Implement advanced filtering with date ranges