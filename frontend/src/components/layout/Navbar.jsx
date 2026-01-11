import { LayoutGrid, Home, CirclePile, Menu, X } from 'lucide-react';
import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownVariants = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        },
        visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
        },
        exit: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        },
    };
  
  const navLinks = [
    { path: '/', title: 'Home', icon: Home },
    { path: '/categories', title: 'Categories', icon: LayoutGrid },
  ];

  return (
    <nav className="bg-[#FEFDFF] p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <NavLink to={'/'} className="flex items-center space-x-2 cursor-pointer group ">
          <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500">
            <CirclePile className="w-5 h-5 text-white transition-transform duration-500 ease-out group-hover:rotate-180" />
          </div>
          <h1 className="text-xl font-extrabold">Khappa</h1>
        </NavLink>

        {/* Mobile Hamburger */}
        <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Nav */}
        <div className="relative hidden md:flex rounded-xl p-1 space-x-2 cursor-pointer">
            
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <NavLink key={link.path} to={link.path} className="relative">
                <div className={`relative z-10 flex items-center justify-center w-32 p-2 rounded-xl ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:bg-[#EEF2FF]' }`}>
                  <link.icon className="w-4 h-4 mr-2" />
                  <span className="font-medium">{link.title}</span>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-[#EEF2FF] rounded-xl cursor-pointer "
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </NavLink>
            );
          })}
        </div>
        
        {/* Mobile Dropdown Menu */}
        <motion.div
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={dropdownVariants}
        className={`absolute top-full right-4 mt-3 md:hidden w-52 rounded-xl bg-white shadow-xl p-2 space-y-1 z-50 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            {navLinks.map((link) => {
                const isActive =
                link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                    isActive
                        ? 'bg-[#EEF2FF] text-indigo-600'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                    <link.icon className="w-4 h-4 mr-3" />
                    <span className="font-medium">{link.title}</span>
                </NavLink>
                );
            })}
        </motion.div>


      </div>
    </nav>
  );
}
