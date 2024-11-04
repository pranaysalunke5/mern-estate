import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-200 shadow-md mt-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 flex-wrap">
        <div>
          <h2 className="font-bold text-sm sm:text-lg text-slate-500">
            RealEstateWeb
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} RealEstateWeb. All rights reserved.
          </p>
        </div>

        <ul className="flex space-x-4 text-slate-600">
          <Link to="/privacy-policy">
            <li className="text-xs sm:text-sm hover:underline">Privacy Policy</li>
          </Link>
          <Link to="/terms-of-service">
            <li className="text-xs sm:text-sm hover:underline">Terms of Service</li>
          </Link>
          <Link to="/contact">
            <li className="text-xs sm:text-sm hover:underline">Contact Us</li>
          </Link>
        </ul>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-slate-600 hover:text-slate-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-slate-600 hover:text-slate-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-slate-600 hover:text-slate-800" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-slate-600 hover:text-slate-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
