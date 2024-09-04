import { FaSearch } from "react-icons/fa";
import {Link, link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-400">Real</span>
          <span className="text-slate-500">Estate</span>
          
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex flex-4">
            <li className="hidden sm:inline text-slate-600 hover:underline">Home</li>
            <li className="hidden sm:inline text-slate-600 hover:underline">About</li>
            <li className="hidden sm:inline text-slate-600 hover:underline">Sign In</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
