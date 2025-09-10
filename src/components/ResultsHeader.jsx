import React from 'react';
import SortDropdown from './SortDropdown';

const ResultsHeader = ({ count, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="mb-4 sm:mb-0">
        <h2 className="text-2xl font-bold text-gray-900">
          {count} {count === 1 ? 'deal' : 'deals'} found
        </h2>
        <p className="text-gray-600 mt-1">
          Browse through our available properties
        </p>
      </div>
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default ResultsHeader;
