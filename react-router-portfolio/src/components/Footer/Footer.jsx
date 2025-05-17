import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const routes = ["/", "/about", "/contact", "/github"];
  const names = ["Home", "About", "Contact Us", "Github"];

  return (
    <footer className="w-full bg-gray-100 border-t shadow-sm mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
          >
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-10"
            />
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:items-center text-gray-600 gap-2 md:gap-6 text-sm font-medium">
          {routes.map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-indigo-600" : "hover:text-indigo-500"
                }`
              }
            >
              {names[idx]}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons or Extras */}
        <div className="flex gap-4">
          {/* Replace with actual links/icons if needed */}
          <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
            Privacy
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
