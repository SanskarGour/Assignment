import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const DealCard = ({ deal }) => {
  return (
    <div className="card">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
        {deal.featured && (
          <div className="absolute top-2 left-2 badge badge-warning">
            Featured
          </div>
        )}
        {!deal.available && (
          <div className="absolute top-2 right-2 badge badge-danger">
            Unavailable
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {deal.title}
          </h3>
          <span className="text-sm text-gray-600">{deal.type}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 flex items-center">
         <FaLocationDot />

          {deal.location}
        </p>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {deal.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {deal.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="badge badge-primary"
            >
              {amenity}
            </span>
          ))}
          {deal.amenities.length > 3 && (
            <span className="badge badge-secondary">
              +{deal.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`star ${
                  i < Math.floor(deal.rating)
                    ? 'star-filled'
                    : 'star-empty'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">
              {deal.rating} ({deal.reviews} reviews)
            </span>
          </div>
          <span className="text-sm text-gray-600">{deal.size}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            ${deal.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-600 ml-1">
              {deal.priceUnit}
            </span>
          </div>
          <button
            className={`btn ${
              deal.available
                ? 'btn-primary'
                : 'btn-disabled'
            }`}
            disabled={!deal.available}
          >
            {deal.available ? 'View Details' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
