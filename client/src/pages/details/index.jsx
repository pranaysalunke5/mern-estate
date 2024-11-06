import React from 'react';

const Details = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-4">Property Details</h1>
      
      {/* Placeholder image */}
      <img 
        src="/path-to-property1.jpg" 
        alt="Property" 
        className="w-full h-64 object-cover rounded mb-4" 
      />
      
      {/* Property information */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Luxury Villa</h2>
        <p className="text-gray-600">3 Beds • 2 Baths • 2500 sqft</p>
      </div>
      
      {/* Pricing */}
      <p className="text-xl font-semibold text-blue-600 mb-4">$850,000</p>
      
      {/* Description */}
      <p className="text-gray-700">
        This luxury villa offers an unmatched blend of elegance and comfort, featuring three spacious bedrooms, two modern bathrooms, and ample living space. Perfect for family living and entertaining guests.
      </p>
    </div>
  );
}

export default Details;
