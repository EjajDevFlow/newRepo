import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../Images/logo.jpg';


const NavBar = () => {



  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload(); // Refreshes the page
  };


  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 shadow-lg">
      {/* Left Side: Logo and Brand Name */}
      <div className="flex items-center">
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
        </Link>
        <h1 className="text-3xl font-bold ml-2 animate-shine">INNOVBERG</h1>
      </div>

      {/* Center: Navbar Links */}
      <ul className="flex space-x-7 text-lg text-yellow-500">
        <li>
          <Link to="/" className="hover:text-yellow-200 relative group">
            Home
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-200 relative group">
            About Us
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
            <Link to="/services" className="hover:text-yellow-200 relative group">
            Service
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
        <Link to="/features" className="hover:text-yellow-200 relative group">
            Features
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-yellow-200 relative group">
            Blog
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-200 relative group">
            Contact
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
        <li>
          <Link to="/team2" className="hover:text-yellow-200 relative group">
            SSM TRP Team
            <span className="block h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
          </Link>
        </li>
      </ul>

      {/* Right Side: Search Input and Icon */}
      <div className="relative">
        {/* Search Input */}
        <input
          type="text"
          className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring focus:ring-indigo-500"
          placeholder="Search"
        />
        {/* Search Icon */}
        <svg
          className="w-6 h-6 absolute left-2 top-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
