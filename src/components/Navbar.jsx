import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Focus Solutions", href: "/focus-solutions" },
  { name: "Trustees", href: "/board-of-trustees" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: "linear-gradient(to right, #FDF8F0/97, #F5EDD8/95)",
        backgroundColor: "rgba(253,248,240,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #EDE4CE",
        boxShadow: "0 2px 16px rgba(45,90,61,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Name */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div
              className="flex items-center justify-center h-12 w-12 rounded-xl shadow-md"
              style={{ background: "linear-gradient(135deg, #2D5A3D, #4A7C59)" }}
            >
              <span className="text-white font-black text-lg tracking-wider">FIF</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-base font-bold tracking-wide"
                style={{ color: "#2D5A3D" }}
              >
                Focus International
              </span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#C9A84C" }}
              >
                Foundation
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isFocusSolutions = link.name === "Focus Solutions";
            
            return (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.href}
                  className={`font-medium tracking-wide transition-all duration-300 ${
                    isFocusSolutions ? "text-[13px] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border" : "text-sm"
                  }`}
                  style={{ 
                    color: isFocusSolutions ? "#1A3322" : "#4B5E53",
                    background: isFocusSolutions ? "linear-gradient(135deg, #E8C96A, #C9A84C)" : "transparent",
                    borderColor: isFocusSolutions ? "rgba(255,255,255,0.4)" : "transparent",
                    fontWeight: isFocusSolutions ? "800" : "500",
                  }}
                  onMouseEnter={e => {
                    if(!isFocusSolutions) {
                      e.target.style.color = "#2D5A3D";
                    } else {
                      e.target.style.background = "linear-gradient(135deg, #F5D678, #D6B559)";
                      e.target.style.boxShadow = "0 6px 16px rgba(201,168,76,0.4)";
                    }
                  }}
                  onMouseLeave={e => {
                    if(!isFocusSolutions) {
                      e.target.style.color = "#4B5E53";
                    } else {
                      e.target.style.background = "linear-gradient(135deg, #E8C96A, #C9A84C)";
                      e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                    }
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}

          {/* Donate Button */}
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/donate"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all"
              style={{
                background: "linear-gradient(135deg, #2D5A3D, #4A7C59)",
                color: "#FDF8F0",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #1E3D2F, #2D5A3D)")}
              onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #2D5A3D, #4A7C59)")}
            >
              Donate Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition"
          style={{ color: "#2D5A3D" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{
              background: "rgba(253,248,240,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid #EDE4CE",
            }}
          >
            <div className="flex flex-col p-5 space-y-4">
              {navLinks.map((link) => {
                const isFocusSolutions = link.name === "Focus Solutions";
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`transition-colors ${
                      isFocusSolutions 
                        ? "font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md w-full justify-center" 
                        : "font-medium text-base text-center w-full"
                    }`}
                    style={{ 
                      color: isFocusSolutions ? "#1A3322" : "#4B5E53",
                      background: isFocusSolutions ? "linear-gradient(135deg, #E8C96A, #C9A84C)" : "transparent"
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/donate"
                className="px-4 py-3 rounded-xl text-center font-semibold shadow-sm text-sm"
                style={{
                  background: "linear-gradient(135deg, #2D5A3D, #4A7C59)",
                  color: "#FDF8F0",
                }}
                onClick={() => setOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
