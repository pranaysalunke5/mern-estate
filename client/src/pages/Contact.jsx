import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contact Section */}
      <div className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg">
            We are dedicated to providing excellent service and helping you with all your real estate needs.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
