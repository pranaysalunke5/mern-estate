import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
        
        <div className="flex flex-col items-center mb-4">
          <img
            src="/path-to-your-profile-image.jpg" // Replace with the actual path to the profile image
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">About Me</h4>
          <p className="text-gray-700">
            I am a real estate enthusiast with a passion for helping people find their dream homes. 
            I specialize in residential properties and have a keen eye for detail.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">My Listings</h4>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">Luxury Villa in the city center</li>
            <li className="text-gray-700">Cozy Cottage in the countryside</li>
            <li className="text-gray-700">Modern Apartment with sea view</li>
          </ul>
        </div>

        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
          Edit Profile
          
        </button>
      </div>
    </div>
  );
};

export default Profile;
