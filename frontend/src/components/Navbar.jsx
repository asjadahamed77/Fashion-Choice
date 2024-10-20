import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo and Icons/Fashion Choice Logo.png";
import fb_icon from "../assets/Logo and Icons/facebook.png";
import insta_icon from "../assets/Logo and Icons/instagram.png";
import whatsapp_icon from "../assets/Logo and Icons/whatsapp.png";
import search from '../assets/Logo and Icons/search.png';
import menu from '../assets/Logo and Icons/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="shadow-sm border-gray-600">
      {/* Top navbar social icons */}
      <div className="flex justify-end items-center space-x-4 p-2 shadow-sm ">
        <img className="w-6 h-6 cursor-pointer hover:border hover:border-gray-800 hover:p-1 transition-all duration-300 hover:rounded-full" src={fb_icon} alt="Facebook icon" />
        <img className="w-6 h-6 cursor-pointer hover:border hover:border-gray-800 hover:p-1 transition-all duration-300 hover:rounded-full" src={insta_icon} alt="Instagram icon" />
        <img className="w-6 h-6 cursor-pointer hover:border hover:border-gray-800 hover:p-1 transition-all duration-300 hover:rounded-full" src={whatsapp_icon} alt="WhatsApp icon" />
      </div>

      {/* Navbar Elements */}
      <div className="flex items-center justify-around p-4 ">
        {/* search */}
        <Link to={'/search'}>
          <img className="w-6 h-6 cursor-pointer" src={search} alt="Search icon" />
        </Link>

        {/* Navbar Logo */}
        <Link to={'/'}>
          <img className="lg:w-[300px] md:w-[250px] w-[250px]" src={logo} alt="Fashion Choice logo" />
        </Link>

        {/* Navbar Links */}
        <ul className="hidden lg:flex items-center gap-6 lg:text-lg text-sm font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-600"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-600"
              }
            >
              COLLECTIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-600"
              }
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-600"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-600"
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>

        {/* toggle menu */}
        <div>
          <img onClick={() => setShowMenu(prev => !prev)} className="lg:hidden w-8 h-8 cursor-pointer" src={menu} alt="Menu icon" />
        </div>
      </div>

      {/* Mobile NavLinks */}
      <div className="lg:hidden">
      <ul
        className={`font-semibold z-[100] bg-white ${showMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} flex flex-col items-center transition-all duration-500 w-full shadow-md  overflow-hidden`}>
        <li className="w-full border-t text-center py-2">
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-gray-600"
            }
          >
            HOME
          </NavLink>
        </li>
        <li className="w-full border-t text-center py-2">
          <NavLink
            to="/collections"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-gray-600"
            }
          >
            COLLECTIONS
          </NavLink>
        </li>
        <li className="w-full border-t text-center py-2">
          <NavLink
            to="/gallery"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-gray-600"
            }
          >
            GALLERY
          </NavLink>
        </li>
        <li className="w-full border-t text-center py-2">
          <NavLink
            to="/about-us"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-gray-600"
            }
          >
            ABOUT US
          </NavLink>
        </li>
        <li className="w-full border-t text-center py-2">
          <NavLink
            to="/contact-us"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-gray-600"
            }
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
