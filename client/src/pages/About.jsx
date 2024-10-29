import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>

        <p className="text-gray-700 mb-4">
          We are passionate about connecting people with the best real estate opportunities. Our team is committed to helping clients find properties that meet their needs and fit their lifestyle.
        </p>

        <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
        <p className="text-gray-700 mb-4">
          To provide exceptional service and guidance in the real estate market, ensuring our clients find the perfect place to call home.
        </p>

        <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
        <p className="text-gray-700">
          We strive to be the most trusted and innovative real estate company, helping people discover their dream properties with ease and confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
