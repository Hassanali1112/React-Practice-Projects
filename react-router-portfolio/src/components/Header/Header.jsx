import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAuth = () => setIsSignIn(!isSignIn);

  const routes = ["/", "/about", "/contact", "/github"];
  const names = ["Home", "About", "Contact Us", "Github"];

  return (
    <header className="w-full bg-white shadow-md  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 flex items-center gap-2"
        >
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-10"
            alt="Logo"
          />
        </Link>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {routes.map((path, idx) => {
            
            return (
              <NavLink
                key={idx}
                to={path}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-indigo-600" : "text-black/50"}`
                }
              >
                {names[idx]}
              </NavLink>
            );
          })}
        </nav>

        {/* Auth Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleAuth}
            className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-semibold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2 text-gray-700 font-medium">
            {["/", "/about", "/contact", "/github"].map((path, idx) => {
              const names = ["Home", "About", "Contact Us", "Github"];
              return (
                <NavLink
                  key={idx}
                  to={path}
                  className={({ isActive }) =>
                    `block transition ${
                      isActive ? "text-indigo-600" : "text-black/50"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {names[idx]}
                </NavLink>
              );
            })}
            <button
              onClick={() => {
                toggleAuth();
                setIsMenuOpen(false);
              }}
              className="mt-2 w-full px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-semibold"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {

//   return (
//     <header className="w-full px-6 py-4 bg-white shadow-md  top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           <img
//             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//             className="mr-3 h-12"
//             alt="Logo"
//           />
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//             }
//           >
//             Contact us
//           </NavLink>
//           <NavLink
//             to="/github"
//             className={({ isActive }) =>
//               ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//             }
//           >
//             Github
//           </NavLink>
//         </nav>

//         {/* Auth Button */}
//         <div className="flex items-center space-x-4">
//           <button className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-semibold">
//             Sign Up
//           </button>
//           <button className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-semibold">
//             Sign In
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <div className="md:hidden mt-4 flex justify-center space-x-10 text-gray-700 font-medium">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//           }
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//           }
//         >
//           Contact us
//         </NavLink>
//         <NavLink
//           to="/github"
//           className={({ isActive }) =>
//             ` transition ${isActive ? "text-indigo-600" : "text-black/50"}`
//           }
//         >
//           Github
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;
