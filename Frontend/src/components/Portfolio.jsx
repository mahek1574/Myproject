import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData as projects } from "../data/projectsData";

export default function Portfolio() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full cursor-default"
          >
            <Sparkles size={13} /> Our Portfolio
          </motion.span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            A curated selection of our digital campaigns, branding initiatives, and custom platforms.
          </p>
        </motion.div>
    
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-2xl hover:border-[#6B8F7B]/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
          
              <div
                className={`relative h-64 bg-gradient-to-br ${project.bgColor} flex flex-col justify-between p-7 overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#17221B] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#6B8F7B] bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <TrendingUp size={11} /> {project.impact}
                  </span>
                </div>
            
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-102 my-auto">
                  <h4 className="text-2xl font-black text-[#17221B] leading-tight line-clamp-2">
                    {project.title}
                  </h4>
                </div>
                
                <div className="w-12 h-1 bg-[#6B8F7B]/40 rounded-full group-hover:w-20 transition-all duration-500 relative z-10" />
              </div>
              
              <div className="p-6 flex items-center justify-between bg-white border-t border-gray-100/80">
                <div>
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                    Case Study
                  </p>
                  <h3 className="text-base font-extrabold text-[#17221B] mt-0.5 group-hover:text-[#6B8F7B] transition-colors duration-300">
                    View Details
                  </h3>
                </div>

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#384E41] text-white hover:bg-[#6B8F7B] group-hover:bg-[#6B8F7B] transition-all duration-300 shadow-xs">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 bg-[#384E41] text-white hover:bg-[#6B8F7B] px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
          >
            <span>Explore More Projects</span>
            <div className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}