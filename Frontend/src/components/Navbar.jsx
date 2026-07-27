import { useState } from "react";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const navigate = useNavigate();
  const serviceKeys = Object.keys(servicesData);

  const { user, logout } = useAuth();

  const handleHomeClick = () => {
    setOpen(false);
    setServicesDropdown(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 max-w-full z-50 bg-[#EAF0EB]/95 backdrop-blur-md border-b border-[#BCCFC4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          <Link to="/" onClick={handleHomeClick}>
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          
          <nav className="hidden min-[901px]:flex items-center gap-4 lg:gap-7">
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={({ isActive }) =>
                `text-sm lg:text-[15px] font-medium transition-colors ${
                  isActive ? "text-[#6B8F7B] font-semibold" : "text-[#17221B]/80 hover:text-[#6B8F7B]"
                }`
              }
            >
              Home
            </NavLink>

            <div
              className="relative py-6"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/services"
                onClick={() => setServicesDropdown(false)}
                className="flex items-center gap-1.5 text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#6B8F7B]" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-[calc(100%-8px)] left-0 w-56 bg-white rounded-xl shadow-xl border border-[#BCCFC4]/30 py-2 overflow-hidden"
                  >
                    {serviceKeys.map((slug) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-[#17221B]/90 hover:bg-[#EAF0EB] hover:text-[#6B8F7B] transition-colors"
                      >
                        {servicesData[slug].title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm lg:text-[15px] font-medium transition-colors ${
                  isActive ? "text-[#6B8F7B] font-semibold" : "text-[#17221B]/80 hover:text-[#6B8F7B]"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/ProjectPage"
              className={({ isActive }) =>
                `text-sm lg:text-[15px] font-medium transition-colors ${
                  isActive ? "text-[#6B8F7B] font-semibold" : "text-[#17221B]/80 hover:text-[#6B8F7B]"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm lg:text-[15px] font-medium transition-colors ${
                  isActive ? "text-[#6B8F7B] font-semibold" : "text-[#17221B]/80 hover:text-[#6B8F7B]"
                }`
              }
            >
              Contact
            </NavLink>

        
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setAccountDropdown(!accountDropdown)}
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#BCCFC4]/20 hover:bg-[#BCCFC4]/40 text-[#17221B] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
                >
                  <User size={14} />
                  <span className="max-w-[70px] truncate">{user.name || user.username || "Account"}</span>
                  <ChevronDown size={12} className={`transition-transform duration-200 ${accountDropdown ? "rotate-180 text-[#6B8F7B]" : ""}`} />
                </button>

                <AnimatePresence>
                  {accountDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setAccountDropdown(false)}
                      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#BCCFC4]/30 py-2 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Signed in as</p>
                        <p className="text-xs font-bold truncate text-[#17221B]">
                          {user.name || user.username}
                        </p>
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider bg-[#6B8F7B]/10 text-[#6B8F7B] px-1.5 py-0.5 rounded">
                          {user.role}
                        </span>
                      </div>
                      <Link
                        to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
                        onClick={() => setAccountDropdown(false)}
                        className="block px-4 py-2.5 text-xs font-semibold text-[#17221B] hover:bg-[#EAF0EB] transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          setAccountDropdown(false);
                          logout();
                          navigate("/");
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#BCCFC4]/20 hover:bg-[#BCCFC4]/40 text-[#17221B] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
              >
                <LogIn size={14} />
                <span>Login</span>
              </Link>
            )}
          </nav>

          <div className="hidden min-[901px]:flex items-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#17221B] text-white px-4 lg:px-6 py-2.5 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wide hover:bg-[#6B8F7B] transition-colors shadow-md cursor-pointer"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>

  
          <div className="flex min-[901px]:hidden items-center gap-2">
            <button
              className="relative z-50 p-2 rounded-full text-[#17221B] hover:bg-[#BCCFC4]/40 transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="min-[901px]:hidden bg-white/95 backdrop-blur-xl border-b border-[#BCCFC4]/40 shadow-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-base font-semibold text-[#17221B]"
              >
                Home
              </Link>

              <div className="border-y border-gray-100 py-3">
                <div className="flex items-center justify-between w-full">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-[#17221B]"
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-[#6B8F7B]" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-2.5 mt-3 pl-3 border-l-2 border-[#6B8F7B]">
                    {serviceKeys.map((slug) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-gray-600 hover:text-[#6B8F7B] transition-colors"
                      >
                        {servicesData[slug].title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-left text-base font-semibold text-[#17221B]"
              >
                About Us
              </Link>

              <Link
                to="/ProjectPage"
                onClick={() => setOpen(false)}
                className="text-left text-base font-semibold text-[#17221B]"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-left text-base font-semibold text-[#17221B]"
              >
                Contact
              </Link>

              
              <div className="border-t border-gray-100 pt-4 mt-2">
                {user ? (
                  <div className="space-y-3">
                    <div className="px-1">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Signed in as</p>
                      <p className="text-sm font-bold text-[#17221B]">{user.name || user.username}</p>
                      <span className="inline-block mt-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#6B8F7B]/10 text-[#6B8F7B] px-1.5 py-0.5 rounded">
                        {user.role}
                      </span>
                    </div>
                    <Link
                      to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
                      onClick={() => setOpen(false)}
                      className="block w-full text-left py-2 text-base font-semibold text-[#17221B]"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setOpen(false);
                        logout();
                        navigate("/");
                      }}
                      className="block w-full text-left py-2 text-base font-semibold text-red-600 cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2 text-base font-semibold text-[#17221B]"
                  >
                    <LogIn size={18} />
                    <span>Login / Register</span>
                  </Link>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full bg-[#17221B] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center block"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;