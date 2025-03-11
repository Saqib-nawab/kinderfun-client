import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Topbar Section */}
      <div className="w-full bg-gray-dark text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Left Side: Search Input */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSearch} className="text-primary" /> {/* Blue Search Icon */}
            <input
              type="text"
              placeholder="Search Keyword"
              className="bg-transparent border-b border-primary placeholder-primary focus:outline-none"
            />
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex items-center gap-6 ml-auto">
            <Link to="mailto:tsn@dummyemail.com" className="flex items-center gap-2 hover:text-gray-light transition">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email: tsn@dummyemail.com</span>
            </Link>
            <Link to="tel:+923106241365" className="flex items-center gap-2 hover:text-gray-light transition">
              <FontAwesomeIcon icon={faPhone} />
              <span>Phone: +92 310 6241365</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="bg-primary shadow-md fixed w-full top-8 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center text-white text-xl font-bold">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-3" />
            <span className="hidden md:block text-white text-lg">Kinder Fun</span>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul className={`lg:flex hidden gap-6`}>
            {[
              { name: "Home", path: "/" },
              { name: "Rhymes & Animation", path: "/rhymes" },
              { name: "Educational Activities", path: "/activities" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-white text-lg px-3 py-2 rounded-md transition ${
                    location.pathname === link.path
                      ? "bg-secondary text-white" // Active state: Orange background
                      : "hover:bg-gray-light hover:text-primary" // Hover effect
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-16">
            <ul className="flex flex-col gap-2 p-4">
              {[
                { name: "Home", path: "/" },
                { name: "Rhymes & Animation", path: "/rhymes" },
                { name: "Educational Activities", path: "/activities" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-dark text-lg px-4 py-2 rounded-md transition ${
                      location.pathname === link.path ? "bg-secondary text-white" : "hover:bg-gray-light hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;