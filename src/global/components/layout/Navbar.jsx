import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiSettings, FiLogOut, FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import { TbWorldSearch } from "react-icons/tb";

import img from '../../../assets/icon_relatikaa.png'
import { handleLogout } from '../../../modules/auth/logic/handleLogout';
import { SearchInput } from '../../../modules/users/components/SearchInput';

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
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto p-3 md:p-4 gap-4">
          
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 md:space-x-3">
            <img src={img} className="h-8" alt="Relatika Logo" />
            <span className="font-lora text-2xl md:text-3xl font-semibold text-darktext truncate">
              Relatika
            </span>
          </Link>
        
          {/* Sección derecha */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 sm:gap-6">
            
            {/* Input de búsqueda */}
            <div className="w-full sm:w-64 md:w-80">
              <SearchInput />
            </div>
        
            {/* Usuario */}
            <div className="flex items-center gap-2">
              <img
                src={authUser.avatar}
                alt="user"
                className="w-8 h-10 rounded-full border border-greybg"
              />
              <Link to="/profile">
                <span className="text-base text-lighttext truncate">
                  {authUser.username}
                </span>
              </Link>
            </div>
        
            {/* Configuración */}
            <Link
              to="/settings"
              className="flex items-center p-2 rounded-full bg-greybg hover:bg-indigo_light hover:text-lightbg text-xl transition-colors"
            >
              <FiSettings />
            </Link>
        
            {/* Logout */}
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
            {(activePath == "/profile" || activePath.startsWith("/user")) && (
              <li>
                <FiUser className="text-indigo_light" />
              </li>)
            }
            {(activePath == "/results") && (
              <li>
                <TbWorldSearch className="text-indigo_light" />
              </li>)
            }
          </ul>
        </div>
      </nav>

    </div>
  );
};