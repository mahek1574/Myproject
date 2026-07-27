import { useState } from "react";

import { Code, Search, Share2, Sparkles, Smartphone, ShieldCheck, Palette, ArrowRight, ArrowUpRight, Zap, Target, TrendingUp, Cpu } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";



export default function Services({ isPreview = false, limit }) {

  const categories = [

    { id: "all", label: "All Services" },

    { id: "dev", label: "Web & App" },

    { id: "marketing", label: "Marketing & SEO" },

    { id: "design", label: "Design & Branding" },

  ];



  const [activeOutcome, setActiveOutcome] = useState(0);

  const outcomes = [

    { label: "High-Speed Web Systems", icon: Cpu, stat: "< 1s Load Time" },

    { label: "Organic Search Dominance", icon: Target, stat: "3x Traffic Growth" },

    { label: "Scalable Mobile Products", icon: TrendingUp, stat: "Cross-Platform" },

  ];



  const allServices = [

    {

      slug: "web-design-development",

      category: "dev",

      icon: Code,

      title: "Web Design & Development",

      description: "We build custom, high-converting websites optimized for speed, mobile devices, and SEO.",

    },

    {

      slug: "mobile-app-development",

      category: "dev",

      icon: Smartphone,

      title: "Mobile App Development",

      description: "Native and cross-platform mobile apps for iOS and Android built with seamless UI/UX.",

    },

    {

      slug: "search-engine-optimization",

      category: "marketing",

      icon: Search,

      title: "Search Engine Optimization",

      description: "Boost your rankings on Google search and attract organic, high-intent traffic.",

    },

    {

      slug: "social-media-marketing",

      category: "marketing",

      icon: Share2,

      title: "Social Media Marketing",

      description: "Engage your target audience and grow your brand footprint on all social channels.",

    },

    {

      slug: "branding-identity",

      category: "design",

      icon: Sparkles,

      title: "Branding & Identity",

      description: "Craft a distinct voice, logo, and design language that stands out in the market.",

    },

    {

      slug: "ui-ux-design",

      category: "design",

      icon: Palette,

      title: "UI/UX Experience Design",

      description: "Intuitive digital product designs focused on seamless user journeys and conversions.",

    },

    {

      slug: "website-maintenance-security",

      category: "dev",

      icon: ShieldCheck,

      title: "Website Audit & Security",

      description: "24/7 server monitoring, performance audits, and malware protection for web apps.",

    },

  ];



  const [activeTab, setActiveTab] = useState("all");



  let filteredServices = activeTab === "all"

    ? allServices

    : allServices.filter(s => s.category === activeTab);



  if (limit) {

    filteredServices = filteredServices.slice(0, limit);

  }



  return (

    <section id="services" className="relative py-20 bg-[#FAFCFB] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6B8F7B]/5 via-transparent to-transparent pointer-events-none" />



      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

 

        {isPreview ? (

          <div className="pt-8 text-center max-w-3xl mx-auto pb-6 border-b border-gray-200/60">

            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-3.5 py-1.5 rounded-full">

              <Zap size={14} /> What We Do Best

            </div>

           

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#17221B] tracking-tight leading-tight">

              Services built to <span className="text-[#6B8F7B]">scale your brand.</span>

            </h2>

           

            <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">

              We bridge software engineering with conversion psychology to deliver high-performing digital products.

            </p>

          </div>

        ) : (

          <div className="pt-12 sm:pt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-gray-200/60">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-3.5 py-1.5 rounded-full">

                <Zap size={14} /> Performance-Driven Execution

              </div>

             

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-[#17221B] tracking-tight leading-tight">

                Capabilities built to <span className="text-[#6B8F7B] inline-block">convert & scale.</span>

              </h2>

             

              <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">

                We bridge software engineering with conversion psychology—delivering search-ready, high-speed digital products without unnecessary bloat.

              </p>

            </div>



           

            <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">

              {outcomes.map((item, idx) => {

                const ItemIcon = item.icon;

                const isSelected = activeOutcome === idx;

                return (

                  <button

                    key={idx}

                    onClick={() => setActiveOutcome(idx)}

                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${

                      isSelected

                        ? "bg-[#384E41] text-white border-[#384E41] shadow-md"

                        : "bg-white text-gray-600 border-gray-200/80 hover:border-[#6B8F7B]/40 hover:bg-gray-50/50"

                    }`}

                  >

                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${

                      isSelected ? "bg-[#6B8F7B] text-white" : "bg-[#6B8F7B]/10 text-[#6B8F7B]"

                    }`}>

                      <ItemIcon size={14} />

                    </div>

                    <div>

                      <p className="text-xs font-bold leading-none">{item.label}</p>

                      <p className={`text-[10px] mt-1 ${isSelected ? "text-[#BCCFC4]" : "text-gray-400"}`}>

                        Benchmark: {item.stat}

                      </p>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

        )}



   

        {!isPreview && (

          <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">

            {categories.map((category) => (

              <button

                key={category.id}

                onClick={() => setActiveTab(category.id)}

                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${

                  activeTab === category.id

                    ? "text-white bg-[#384E41] shadow-md shadow-[#384E41]/20"

                    : "text-gray-600 bg-white hover:bg-gray-50 border border-gray-200/80 hover:border-[#6B8F7B]/40"

                }`}

              >

                {category.label}

              </button>

            ))}

          </div>

        )}



   

        <motion.div

          layout

          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

        >

          <AnimatePresence>

            {filteredServices.map((service) => {

              const Icon = service.icon;

              return (

                <motion.div

                  layout

                  initial={{ opacity: 0, scale: 0.95 }}

                  animate={{ opacity: 1, scale: 1 }}

                  exit={{ opacity: 0, scale: 0.95 }}

                  transition={{ duration: 0.3 }}

                  key={service.slug}

                  className="relative bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-[#6B8F7B]/35 transition-all duration-300 group flex flex-col justify-between overflow-hidden"

                >

                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6B8F7B]/10 rounded-full blur-2xl group-hover:bg-[#6B8F7B]/20 transition-all duration-500 pointer-events-none" />



                  <div className="relative z-10">

                    <div className="w-11 h-11 rounded-2xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center group-hover:bg-[#6B8F7B] group-hover:text-white transition-colors duration-300 shadow-inner">

                      <Icon size={22} />

                    </div>



                    <h3 className="mt-5 font-bold text-base text-[#17221B] group-hover:text-[#6B8F7B] transition-colors duration-300">

                      {service.title}

                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed">

                      {service.description}

                    </p>

                  </div>



                  <div className="relative z-10 mt-6 pt-4 border-t border-gray-100/80">

                    <Link

                      to={`/services/${service.slug}`}

                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6B8F7B] hover:text-[#384E41] transition-colors duration-200"

                    >

                      Learn More

                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />

                    </Link>

                  </div>

                </motion.div>

              );

            })}



            {(isPreview || activeTab === "all" || activeTab === "dev") && (

              <motion.div

                layout

                initial={{ opacity: 0, scale: 0.95 }}

                animate={{ opacity: 1, scale: 1 }}

                exit={{ opacity: 0, scale: 0.95 }}

                transition={{ duration: 0.3 }}

                className="relative bg-gradient-to-br from-[#6B8F7B]/10 via-[#6B8F7B]/5 to-white p-6 rounded-3xl border-2 border-dashed border-[#6B8F7B]/40 shadow-xs hover:shadow-xl hover:border-[#6B8F7B] transition-all duration-300 group flex flex-col justify-between overflow-hidden"

              >

                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6B8F7B]/20 rounded-full blur-2xl group-hover:bg-[#6B8F7B]/30 transition-all duration-500 pointer-events-none" />



                <div className="relative z-10">

                  <div className="w-11 h-11 rounded-2xl bg-[#6B8F7B] text-white flex items-center justify-center shadow-md shadow-[#6B8F7B]/20">

                    <Sparkles size={20} />

                  </div>



                  <h3 className="mt-5 font-extrabold text-base text-[#17221B] group-hover:text-[#6B8F7B] transition-colors duration-300">

                    Need Something Custom?

                  </h3>

                 

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">

                    Have a unique requirement? We engineer tailored tech solutions specifically for your business.

                  </p>

                </div>



                <div className="relative z-10 mt-6 pt-4 border-t border-[#6B8F7B]/20">

                  <Link

                    to="/contact"

                    className="inline-flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-[#17221B] group-hover:text-[#6B8F7B] transition-colors"

                  >

                    <span>Let's Discuss</span>

                    <ArrowUpRight className="w-4 h-4 text-[#6B8F7B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                  </Link>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>



       

        {isPreview && (

          <div className="mt-12 text-center">

            <Link

              to="/services"

              className="inline-flex items-center gap-2.5 bg-[#384E41] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#6B8F7B] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"

            >

              <span>Explore All Services</span>

              <ArrowRight className="w-4 h-4" />

            </Link>

          </div>

        )}

      </div>

    </section>

  );

}

