import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkPrimary text-white py-4 px-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Kinderfun. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="mt-2 space-x-4">
          <a href="/" className="hover:underline">Facebook</a>
          <a href="/" className="hover:underline">YouTube</a>
          <a href="/" className="hover:underline">Instagram</a>
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-2">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
