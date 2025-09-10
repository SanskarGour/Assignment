import { useState, useMemo } from 'react';
import { filterDeals, searchDeals, sortDeals } from '../utils/filterUtils';

export const useDealsFilter = (deals) => {
  const [filters, setFilters] = useState({
    type: 'All',
    priceRange: null,
    amenities: [],
    availability: null
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedDeals = useMemo(() => {
    let filtered = filterDeals(deals, filters);
    filtered = searchDeals(filtered, searchTerm);
    return sortDeals(filtered, sortBy);
  }, [deals, filters, searchTerm, sortBy]);

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const updateAmenities = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: 'All',
      priceRange: null,
      amenities: [],
      availability: null
    });
    setSearchTerm('');
    setSortBy('featured');
  };

  const hasActiveFilters = () => {
    return filters.type !== 'All' ||
           filters.priceRange !== null ||
           filters.amenities.length > 0 ||
           filters.availability !== null ||
           searchTerm.trim() !== '';
  };

  return {
    filters,
    searchTerm,
    sortBy,
    filteredAndSortedDeals,
    updateFilter,
    updateAmenities,
    setSearchTerm,
    setSortBy,
    clearFilters,
    hasActiveFilters
  };
};
