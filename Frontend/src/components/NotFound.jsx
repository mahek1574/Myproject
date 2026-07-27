import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        paddingTop: "180px", 
        paddingBottom: "80px", 
        position: "relative", 
        zIndex: 40, 
        minHeight: "100vh" 
      }} 
      className="w-full bg-[#FAFCFB] px-6 flex justify-center items-start block"
    >
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#6B8F7B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-50 max-w-2xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-2 rounded-full mb-6"
        >
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>Page Lost in Space</span>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none my-4"
        >
          <h1 className="text-8xl sm:text-9xl font-black text-[#17221B]/10 tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl sm:text-6xl font-black text-[#17221B]">
              Lost <span className="text-[#6B8F7B]">Way?</span>
            </span>
          </div>
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed mt-6"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-bold shadow-xs hover:bg-gray-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-gray-500" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#17221B] text-white text-sm font-bold hover:bg-[#6B8F7B] transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 font-medium"
        >
          <span className="flex items-center gap-1 text-gray-700 font-semibold">
            <Sparkles className="w-3 h-3 text-[#6B8F7B]" /> Quick Navigation:
          </span>
          <Link to="/services" className="hover:text-[#6B8F7B]">Services</Link>
          <span>•</span>
          <Link to="/projectpage" className="hover:text-[#6B8F7B]">Portfolio</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#6B8F7B]">Contact</Link>
        </motion.div>
      </div>
    </div>
  );
}