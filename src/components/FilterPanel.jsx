import React from 'react';

const FilterPanel = ({ 
  filters, 
  updateFilter, 
  updateAmenities, 
  clearFilters, 
  hasActiveFilters,
  filterOptions 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters() && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Property Type Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Property Type
        </label>
        <div className="space-y-2">
          {filterOptions.types.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                name="type"
                value={type}
                checked={filters.type === type}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price Range
        </label>
        <div className="space-y-2">
          {filterOptions.priceRanges.map((range, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                onChange={() => updateFilter('priceRange', range)}
                className="form-radio"
              />
              <span className="ml-2 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Amenities
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {filterOptions.amenities.map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={() => updateAmenities(amenity)}
                className="form-checkbox"
              />
              <span className="ml-2 text-sm text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Availability
        </label>
        <div className="space-y-2">
          {filterOptions.availability.map((availability) => (
            <label key={availability} className="flex items-center">
              <input
                type="radio"
                name="availability"
                value={availability}
                checked={filters.availability === availability}
                onChange={(e) => updateFilter('availability', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2 text-sm text-gray-700">{availability}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
