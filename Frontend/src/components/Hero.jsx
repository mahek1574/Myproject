import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import Monk from "../assets/Monk.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8] overflow-hidden w-full max-w-full"
    >
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 40s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 30s linear infinite;
        }
      `}</style>

      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 -right-10 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#BCCFC4]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#6B8F7B]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          
  
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:col-span-7 z-10 text-center lg:text-left max-w-xl md:max-w-3xl lg:max-w-none mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BCCFC4]/40 shadow-xs hover:border-[#6B8F7B]/50 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-[#6B8F7B] animate-ping"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F6658]">
                  Digital Marketing Agency
                </span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.16] tracking-tight text-[#17221B]"
            >
              We Help Businesses{" "}
              <span className="bg-gradient-to-r from-[#6B8F7B] to-[#4F6658] bg-clip-text text-transparent inline-block">
                Grow Digitally
              </span>{" "}
              With Smart Solutions
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="mt-3.5 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg md:max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
            >
              From high-converting websites to SEO, branding, advertising, and
              AI-powered marketing, we help businesses attract more customers
              and increase revenue.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#384E41] text-white font-semibold shadow-md hover:bg-[#6B8F7B] hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
              >
                Get Free Strategy Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#services"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white border border-[#BCCFC4]/60 text-[#17221B] font-semibold hover:bg-gray-50 hover:shadow-xs transition-all duration-300 text-xs sm:text-sm"
              >
                Explore Services
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="mt-7 sm:mt-9 pt-5 border-t border-gray-200/60 flex items-center justify-center lg:justify-start gap-8 sm:gap-12"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
                  50+
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Successful Projects
                </p>
              </div>

              <div className="h-8 w-px bg-gray-200"></div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
                  95%
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

      
          <div className="w-full lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
    
              <div className="absolute inset-0 bg-[#6B8F7B]/20 rounded-full blur-3xl pointer-events-none" />

              
              <div className="absolute inset-[-30px] sm:inset-[-40px] rounded-full border-2 border-dashed border-[#6B8F7B]/60 pointer-events-none animate-spin-slow" />

            
              <div className="absolute inset-0 rounded-full border border-solid border-[#6B8F7B]/40 pointer-events-none animate-spin-reverse bg-gradient-to-tr from-transparent via-[#6B8F7B]/10 to-transparent shadow-[0_0_30px_rgba(107,143,123,0.25)]" />

          
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <img
                  src={Monk}
                  alt="Mindful Growth Strategy Artwork"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(23,34,27,0.15)]"
                />
              </div>

            
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gray-100 shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#6B8F7B] flex items-center justify-center text-white">
                  <Sparkles size={12} />
                </div>
                <span className="text-xs font-bold text-[#17221B]">Zen Focus</span>
              </motion.div>

            
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 z-20 bg-[#17221B] text-white px-4 py-2 rounded-full border border-white/10 shadow-xl flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-[#6B8F7B]/30 flex items-center justify-center text-[#6B8F7B]">
                  <Zap size={12} />
                </div>
                <span className="text-xs font-medium tracking-wide">Clarity First</span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;