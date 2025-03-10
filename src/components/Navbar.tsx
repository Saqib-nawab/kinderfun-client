import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Kinderfun
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/rhymes" className="hover:underline">Rhymes</Link>
          <Link to="/activities" className="hover:underline">Activities</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/subscription" className="hover:underline">Subscribe</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
