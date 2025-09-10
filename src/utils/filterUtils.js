export const filterDeals = (deals, filters) => {
  return deals.filter(deal => {
    // Filter by type
    if (filters.type && filters.type !== 'All' && deal.type !== filters.type) {
      return false;
    }

    // Filter by price range
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (deal.price < min || deal.price > max) {
        return false;
      }
    }

    // Filter by amenities
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        deal.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    // Filter by availability
    if (filters.availability) {
      if (filters.availability === 'Available' && !deal.available) {
        return false;
      }
      if (filters.availability === 'Unavailable' && deal.available) {
        return false;
      }
      if (filters.availability === 'Featured' && !deal.featured) {
        return false;
      }
    }

    return true;
  });
};

export const searchDeals = (deals, searchTerm) => {
  if (!searchTerm.trim()) {
    return deals;
  }

  const term = searchTerm.toLowerCase();
  return deals.filter(deal => 
    deal.title.toLowerCase().includes(term) ||
    deal.location.toLowerCase().includes(term) ||
    deal.description.toLowerCase().includes(term) ||
    deal.type.toLowerCase().includes(term)
  );
};

export const sortDeals = (deals, sortBy) => {
  const sortedDeals = [...deals];
  
  switch (sortBy) {
    case 'price-low':
      return sortedDeals.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedDeals.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedDeals.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sortedDeals.sort((a, b) => b.id - a.id);
    case 'featured':
      return sortedDeals.sort((a, b) => b.featured - a.featured);
    default:
      return sortedDeals;
  }
};
