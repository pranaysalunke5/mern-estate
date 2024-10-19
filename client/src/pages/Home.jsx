import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
          <p className="text-xl mt-4">Explore the best real estate properties around you</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
            Get Started
          </button>
        </div>
        
      </div>

      {/* Featured Properties */}
      
      <div className="py-12">
        
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Properties</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-property1.jpg" alt="Property" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Luxury Villa</h3>
              <p className="text-gray-600 mb-4">3 Beds • 2 Baths • 2500 sqft</p>
              <p className="text-lg font-semibold text-blue-600">$850,000</p>
            </div>
          </div>
          

        </div>
      </div>

      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg">
            We offer the best real estate deals and ensure that you find a home that fits your budget and lifestyle.
          </p>
        </div>
      </div>
      

      <footer className="bg-gray-800 py-6 text-white text-center">
        <p>&copy; 2024 Your Real Estate Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
