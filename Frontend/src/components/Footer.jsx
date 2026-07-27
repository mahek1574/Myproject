import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../assets/logo.svg";

export default function Footer() {
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesList = Object.entries(servicesData);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#17221B] text-gray-300 overflow-hidden border-t border-[#BCCFC4]/20">
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6B8F7B]/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#6B8F7B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#BCCFC4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-8 relative z-10">
        
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10 text-center lg:text-left">
          <div className="max-w-xl">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain hover:opacity-90 transition duration-300 mx-auto lg:mx-0"
              />
            </Link>
            <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              We craft premium digital experiences that help ambitious brands
              grow faster through modern design, strategic development, and
              AI-powered marketing.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end shrink-0 mt-2 lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Connect With Us
            </p>
            <div className="flex items-center gap-3 justify-center">
              {[
                { icon: <FaFacebookF size={15} />, href: "#" },
                { icon: <FaInstagram size={15} />, href: "#" },
                { icon: <FaLinkedinIn size={15} />, href: "#" },
                { icon: <FaXTwitter size={15} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#6B8F7B] hover:border-[#6B8F7B] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      
        <div className="flex flex-wrap justify-between gap-y-8 gap-x-6 py-10 border-b border-white/10 text-center sm:text-left">
          
  
          <div className="w-full sm:w-auto min-w-[130px]">
            <h3 className="text-white font-bold text-base tracking-wide mb-4 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F7B]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center justify-center sm:justify-start gap-1.5 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight
                      size={13}
                      className="text-[#6B8F7B] hidden sm:inline-block opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="w-full sm:w-auto min-w-[180px]">
            <h3 className="text-white font-bold text-base tracking-wide mb-4 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F7B]"></span>
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map(([slug, service]) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="group inline-flex items-center justify-center sm:justify-start gap-1.5 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight
                      size={13}
                      className="text-[#6B8F7B] hidden sm:inline-block opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="w-full sm:w-auto min-w-[180px]">
            <h3 className="text-white font-bold text-base tracking-wide mb-4 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F7B]"></span>
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-400 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#6B8F7B] shrink-0" />
                <a
                  href="mailto:hello@agency.com"
                  className="hover:text-white transition-colors"
                >
                  hello@agency.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#6B8F7B] shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 234-5678
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-[#6B8F7B] shrink-0" />
                <span>Alberta, Canada</span>
              </div>
            </div>
          </div>

        
          <div className="w-full sm:w-72 lg:w-80">
            <h3 className="text-white font-bold text-base tracking-wide mb-4 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F7B]"></span>
              Newsletter
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed text-center sm:text-left">
              Subscribe for marketing insights and project updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative w-full max-w-sm mx-auto sm:mx-0"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-11 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#6B8F7B] transition duration-300"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#6B8F7B] hover:bg-[#597867] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
              >
                <Send size={13} />
              </button>
            </form>
          </div>

        </div>

        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Digital Agency. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-600 self-center"></span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-600 self-center"></span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>

  
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-[#6B8F7B] text-white shadow-lg flex items-center justify-center hover:bg-[#597867] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}