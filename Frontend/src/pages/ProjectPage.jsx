import React, { useState } from "react";
import { ArrowUpRight, Sparkles, TrendingUp, X, Search, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Retail & Commerce", "Financial Technology", "B2B Software"];

  const projects = [
    {
      id: "ecommerce-rebrand",
      title: "E-Commerce Platform Rebrand",
      category: "Retail & Commerce",
      impact: "+210% Growth",
      bgColor: "from-[#BCCFC4]/40 to-[#6B8F7B]/20",
      accentColor: "#6B8F7B",
      client: "VogueVibe Retail",
      year: "2026",
      featured: true,
      summary: "Full digital commerce transformation with sub-second page speed and a high-converting UI kit.",
      deliverables: ["UI/UX Redesign", "Headless Storefront", "Conversion Optimization"]
    },
    {
      id: "fintech-app",
      title: "Fintech Mobile Application",
      category: "Financial Technology",
      impact: "100k+ Active Users",
      bgColor: "from-[#384E41]/10 to-[#6B8F7B]/20",
      accentColor: "#384E41",
      client: "FinPulse Global",
      year: "2025",
      featured: false,
      summary: "Next-gen personal finance app offering real-time wealth tracking and automated micro-investments.",
      deliverables: ["Mobile iOS/Android", "Design System", "Security Audit UI"]
    },
    {
      id: "saas-dashboard",
      title: "AI-Powered SaaS Dashboard",
      category: "B2B Software",
      impact: "4.9/5 Rating",
      bgColor: "from-[#6B8F7B]/20 to-[#384E41]/15",
      accentColor: "#4F6658",
      client: "TaskFlow Systems",
      year: "2026",
      featured: false,
      summary: "Intuitive enterprise analytics suite powered by predictive AI models to automate daily workflows.",
      deliverables: ["Web Application", "AI Interface Design", "Design Tokens"]
    },
    {
      id: "healthcare-hub",
      title: "HealthTech Telemedicine Hub",
      category: "B2B Software",
      impact: "50k+ Consults",
      bgColor: "from-[#BCCFC4]/40 to-[#384E41]/10",
      accentColor: "#6B8F7B",
      client: "CareSync Health",
      year: "2025",
      featured: false,
      summary: "Secure HIPAA-compliant telehealth platform connecting patients with specialist doctors in seconds.",
      deliverables: ["Patient Portal", "Doctor Web App", "Video Call Interface"]
    },
    {
      id: "luxury-store",
      title: "Luxury Apparel Storefront",
      category: "Retail & Commerce",
      impact: "2.8x Sales Conversion",
      bgColor: "from-[#384E41]/5 to-[#384E41]/20",
      accentColor: "#384E41",
      client: "Aura Fashion",
      year: "2026",
      featured: false,
      summary: "Bespoke digital shopping experience built for premium apparel with fluid motion animations.",
      deliverables: ["Custom Shopify Theme", "Motion Graphics", "Checkout Revamp"]
    },
    {
      id: "wealth-portal",
      title: "Crypto Wealth Management",
      category: "Financial Technology",
      impact: "$12M+ Volume",
      bgColor: "from-[#6B8F7B]/30 to-[#BCCFC4]/20",
      accentColor: "#4F6658",
      client: "BlockTrust",
      year: "2026",
      featured: false,
      summary: "Institutional portfolio dashboard for multi-chain digital asset monitoring and yield analysis.",
      deliverables: ["Web3 Integration", "Dashboard UI", "Analytics Engine"]
    }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeFilter === "All" || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="pt-32 pb-24 bg-[#F8FAF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full cursor-default"
          >
            <Sparkles size={13} /> Selected Works
          </motion.span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-[#2C3E34] tracking-tight leading-tight">
            Crafting Digital Products That Drive Real Impact
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A curated showcase of high-impact web design, custom engineering, and scalable brand design systems.
          </p>
        </div>

  
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs text-center">
          <div className="p-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2C3E34]">$50M+</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Client Revenue Generated</p>
          </div>
          <div className="p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2C3E34]">98%</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Client Retention Rate</p>
          </div>
          <div className="p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2C3E34]">15+</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Design & Dev Awards</p>
          </div>
          <div className="p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2C3E34]">2.5x</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Average Conversion Lift</p>
          </div>
        </div>

      
        {featuredProject && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                ⭐ Featured Case Study
              </span>
            </div>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(featuredProject)}
              className="bg-white rounded-[32px] border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden grid lg:grid-cols-12 cursor-pointer group"
            >
              <div className={`lg:col-span-7 p-8 sm:p-12 bg-gradient-to-br ${featuredProject.bgColor} flex flex-col justify-between`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#384E41] bg-white/90 px-3 py-1 rounded-full shadow-xs">
                    {featuredProject.category}
                  </span>
                  <span className="text-xs font-extrabold text-[#6B8F7B] bg-white/80 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <TrendingUp size={12} /> {featuredProject.impact}
                  </span>
                </div>

                <div className="my-8">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#2C3E34] group-hover:text-[#6B8F7B] transition-colors duration-300">
                    {featuredProject.title}
                  </h2>
                  <p className="text-gray-700 mt-4 text-base leading-relaxed line-clamp-3">
                    {featuredProject.summary}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#384E41] text-white flex items-center justify-center group-hover:bg-[#6B8F7B] transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                  <span className="text-sm font-bold text-[#384E41]">Read Full Case Study</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Client & Year</h4>
                  <p className="text-lg font-bold text-[#2C3E34] mt-1">{featuredProject.client} — {featuredProject.year}</p>

                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mt-8">Key Scope & Services</h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {featuredProject.deliverables.map((item, idx) => (
                      <span key={idx} className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs font-semibold text-gray-500">
                  <ShieldCheck size={16} className="text-[#6B8F7B]" /> Verified Client Results
                </div>
              </div>
            </motion.div>
          </div>
        )}

      
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200/60 pb-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#384E41] text-white shadow-sm"
                    : "bg-white text-gray-600 hover:text-[#384E41] hover:bg-gray-50 border border-gray-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200/80 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#6B8F7B] transition-colors"
            />
          </div>
        </div>

    
        <motion.div
          key={activeFilter + searchQuery}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className={`relative h-60 bg-gradient-to-br ${project.bgColor} flex flex-col justify-between p-6`}>
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#384E41] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#6B8F7B] bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <TrendingUp size={11} /> {project.impact}
                  </span>
                </div>

                <div className="relative z-10 my-auto">
                  <h3 className="text-xl font-extrabold text-[#2C3E34] leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="w-10 h-1 bg-[#6B8F7B]/40 rounded-full group-hover:w-16 transition-all duration-300 relative z-10" />
              </div>

              <div className="p-5 flex items-center justify-between bg-white border-t border-gray-50">
                <div>
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Client</p>
                  <h4 className="text-sm font-extrabold text-[#2C3E34] group-hover:text-[#6B8F7B] transition-colors">
                    {project.client}
                  </h4>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#384E41] text-white flex items-center justify-center group-hover:bg-[#6B8F7B] transition-colors shadow-xs">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm font-medium">No projects found matching your criteria.</p>
          </div>
        )}


        <div className="mt-20 bg-white border border-gray-200/80 rounded-[32px] p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#6B8F7B]/10 text-[#6B8F7B] items-center justify-center shrink-0">
              <MessageSquare size={26} />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6B8F7B]">
                Ready to collaborate?
              </span>
              <h3 className="text-2xl font-black text-[#2C3E34] mt-1">
                Have a new project in mind?
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Let’s discuss how we can bring your next digital vision to life.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full md:w-auto bg-[#384E41] hover:bg-[#6B8F7B] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-sm cursor-pointer"
          >
            Get In Touch <ArrowRight size={15} />
          </Link>
        </div>

    
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#2C3E34]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[32px] max-w-lg w-full p-8 relative shadow-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 text-[#2C3E34] hover:bg-[#384E41] hover:text-white transition-colors flex items-center justify-center"
                >
                  <X size={18} />
                </button>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-3.5 py-1.5 rounded-full">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl font-black text-[#2C3E34] mt-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {selectedProject.summary}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-gray-400">Client</span>
                    <p className="text-xs font-bold text-[#2C3E34] mt-0.5">{selectedProject.client}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-gray-400">Outcome</span>
                    <p className="text-xs font-bold text-[#6B8F7B] mt-0.5">{selectedProject.impact}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-extrabold uppercase text-[#2C3E34] tracking-wider mb-3">Key Scope</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((item, idx) => (
                      <span key={idx} className="text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 w-full bg-[#384E41] hover:bg-[#6B8F7B] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                >
                  Close Case Study
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}