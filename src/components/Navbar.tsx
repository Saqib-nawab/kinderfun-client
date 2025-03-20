// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [mobileBlogDropdownOpen, setMobileBlogDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileBlogDropdown = () =>
    setMobileBlogDropdownOpen(!mobileBlogDropdownOpen);

  // Define the top 5 blog categories with their slugs.
  const blogCategories = [
    {
      name: "Early Learning & Development",
      slug: "early-learning-development",
    },
    { name: "Nursery Rhymes & Music", slug: "nursery-rhymes-music" },
    { name: "Learning Through Play", slug: "learning-through-play" },
    { name: "ABCs & Numbers", slug: "abcs-numbers" },
    { name: "Colors & Shapes Exploration", slug: "colors-shapes-exploration" },
  ];

  // Main navigation links (excluding Blog which is handled separately)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rhymes & Animation", path: "/rhymes" },
    { name: "Educational Activities", path: "/activities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-4/5 mx-auto mt-4 relative">
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

          {/* Desktop Navigation */}
          <ul className="lg:flex hidden gap-6 items-center">
            {navLinks.map((link) => (
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

            {/* Blog Dropdown for Desktop */}
            <li
              className="relative"
              onMouseEnter={() => setBlogDropdownOpen(true)}
              onMouseLeave={() => setBlogDropdownOpen(false)}
            >
              <button
                className={`text-white text-lg px-3 py-2 rounded-md transition flex items-center ${
                  location.pathname.startsWith("/blog")
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-light hover:text-primary"
                }`}
              >
                Blog <ChevronDown className="ml-1" size={16} />
              </button>
              {blogDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    {blogCategories.map((category) => (
                      <li key={category.slug}>
                        <Link
                          to={`/blog/category/${category.slug}`}
                          className="block px-4 py-2 text-dark hover:bg-gray-100"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/blog/categories"
                        className="block px-4 py-2 text-dark font-semibold hover:bg-gray-100"
                      >
                        More
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-16 z-10">
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
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

              {/* Mobile Blog Dropdown */}
              <li>
                <button
                  onClick={toggleMobileBlogDropdown}
                  className="flex w-full items-center justify-between text-dark text-lg px-4 py-2 rounded-md transition hover:bg-gray-light hover:text-primary focus:outline-none"
                >
                  Blog <ChevronDown size={16} />
                </button>
                {mobileBlogDropdownOpen && (
                  <ul className="pl-4 mt-2">
                    {blogCategories.map((category) => (
                      <li key={category.slug}>
                        <Link
                          to={`/blog/category/${category.slug}`}
                          className="block text-dark text-base px-4 py-2 rounded-md transition hover:bg-gray-light hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileBlogDropdownOpen(false);
                          }}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/blog/categories"
                        className="block text-dark text-base px-4 py-2 rounded-md font-semibold transition hover:bg-gray-light hover:text-primary"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileBlogDropdownOpen(false);
                        }}
                      >
                        More
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
