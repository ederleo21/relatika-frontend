import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FiHome, FiMessageSquare, FiUser } from "react-icons/fi"

import img from '../../../assets/icon_relatikaa.png'
import { handleLogout } from '../../../modules/auth/logic/handleLogout';
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(true);
  const authUser  = useSelector(state => state.authUser.authUser)

  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY.current && showNavbar) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current && !showNavbar) {
        setShowNavbar(true);
      }
  
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNavbar]);

  return (
<div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-700 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
  <nav className="bg-greybg border-b border-greybg font-poppins shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto p-3 md:p-4 gap-2 sm:gap-0">

      {/* Logo */}
      <Link to="/home" className="flex items-center space-x-2 md:space-x-3">
        <img src={img} className="h-8 md:h-8" alt="Relatika Logo" />
        <span className="font-lora text-2xl md:text-3xl font-semibold text-darktext truncate">Relatika</span>
      </Link>

      {/* Usuario y acciones */}
      <div className="flex flex-wrap sm:flex-nowrap items-center space-x-2 md:space-x-6 mt-2 sm:mt-0">
        <div className="flex items-center space-x-2">
          <img src={authUser.avatar} alt="user" className="w-8 h-8 rounded-full border border-greybg" />
          <span className="text-base text-lighttext truncate">{authUser.username}</span>
        </div>
        <Link
          to="/settings"
          className="flex items-center p-2 rounded-full bg-greybg hover:bg-indigo_light hover:text-lightbg text-xl transition-colors"
        >
          <FiSettings />
        </Link>
        <button
          onClick={() => handleLogout(dispatch)}
          className="flex items-center px-4 py-1 text-base font-medium text-lightbg bg-red_coral rounded hover:bg-red-500 transition-colors"
        >
          <FiLogOut className="mr-1" />
          Logout
        </button>
      </div>
    </div>
  </nav>

  {/* Barra de navegación inferior */}
  <nav className="bg-greybg border-t border-greybg font-poppins shadow-sm">
    <div className="max-w-screen-xl px-4 py-2 md:py-3 mx-auto">
      <ul className="flex justify-center gap-10 md:gap-14 text-2xl md:text-2xl text-lighttext">
        <li>
          <Link
            to="/home"
            className={`transition-colors ${activePath === "/home" ? "text-indigo_light" : "hover:text-indigo_light"}`}
          >
            <FiHome />
          </Link>
        </li>
        <li>
          <Link
            to="/messages"
            className={`transition-colors ${activePath === "/messages" ? "text-indigo_light" : "hover:text-indigo_light"}`}
          >
            <FiMessageSquare />
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`transition-colors ${activePath === "/profile" ? "text-indigo_light" : "hover:text-indigo_light"}`}
          >
            <FiUser />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</div>

  );
};