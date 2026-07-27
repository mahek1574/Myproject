import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1500);

    return () => {
  
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] h-screen w-screen flex flex-col items-center justify-center bg-[#0A110D] text-white select-none overflow-hidden"
    >
    
      <div className="absolute w-[400px] h-[400px] bg-[#6B8F7B]/10 rounded-full blur-[100px] pointer-events-none" />

  
      <div className="relative flex flex-col items-center gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <motion.img
            src={logo}
            alt="Logo"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(107,143,123,0.5)]"
          />
        </motion.div>

      
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F7B] animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#BCCFC4]/60">
            Loading
          </span>
        </div>
      </div>
    </motion.div>
  );
}