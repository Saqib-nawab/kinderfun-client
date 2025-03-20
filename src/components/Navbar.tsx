// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-4/5 mx-auto mt-4">
      {/* Navbar Section */}
      <nav className="bg-primary shadow-md rounded-4xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-white text-xl font-bold"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto mr-3" />
            <span className="hidden md:block text-white text-lg">
              Kinder Fun
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links for larger screens */}
          <ul className="lg:flex hidden gap-6">
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
                      ? "bg-secondary text-white"
                      : "hover:bg-gray-light hover:text-primary"
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
                      location.pathname === link.path
                        ? "bg-secondary text-white"
                        : "hover:bg-gray-light hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
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
