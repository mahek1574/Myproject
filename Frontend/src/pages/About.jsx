import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb,
  MessageSquare,
  Clock,
  Send
} from "lucide-react";
import Monk from "../assets/Monk.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const stats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Years Experience", value: "5+" },
    { label: "On-Time Delivery", value: "100%" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision & Quality",
      desc: "We write clean code, craft intuitive designs, and ensure top-notch performance across all devices.",
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      desc: "Fast-paced execution without compromising accuracy. We deliver scalable solutions on time.",
    },
    {
      icon: Users,
      title: "Client-Centric Partner",
      desc: "We treat your project like our own, maintaining full transparency and clear communication throughout.",
    },
    {
      icon: ShieldCheck,
      title: "Built For Growth",
      desc: "Digital products built with future-proof tech stacks designed to scale as your business expands.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Audit", desc: "Deep dive into your business goals, target audience, competitive landscape, and tech requirements." },
    { step: "02", title: "Strategy & UX Design", desc: "Crafting modern UI/UX blueprints, wireframes, and scalable architecture plans." },
    { step: "03", title: "Development & Testing", desc: "Building high-performance, responsive, and secure web & app solutions with continuous QA testing." },
    { step: "04", title: "Launch & Growth Scaling", desc: "Seamless deployment accompanied by continuous optimization, performance tuning, and maintenance." },
  ];

  const coreCapabilities = [
    "Full-Stack Web Development",
    "UI/UX Design & Prototyping",
    "Conversion Rate Optimization",
    "AI & Marketing Integration",
    "Search Engine Optimization (SEO)",
    "Custom Software Architecture"
  ];

  return (
    <div className="bg-[#FAFCFB] text-[#17221B] pt-24 pb-20 overflow-hidden font-sans">
      
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

      <section className="relative px-6 lg:px-10 max-w-7xl mx-auto pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#17221B] bg-[#6B8F7B]/15 px-4 py-1.5 rounded-full border border-[#6B8F7B]/20">
                <span className="w-2 h-2 rounded-full bg-[#6B8F7B] animate-ping" />
                About Our Agency
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="mt-6 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#17221B]"
            >
              We Build Digital Assets That Drive{" "}
              <span className="bg-gradient-to-r from-[#6B8F7B] to-[#4F6658] bg-clip-text text-transparent">
                Sustainable Growth
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-[#2C3E33] text-base sm:text-lg leading-relaxed font-normal"
            >
              We are a collective of strategic thinkers, developers, and designers working together to eliminate digital clutter. By combining strategic clarity with technical mastery, we help businesses establish a dominant digital footprint.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {coreCapabilities.slice(0, 3).map((capability, idx) => (
                <span key={idx} className="text-xs font-semibold text-[#17221B] bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  ✓ {capability}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#28382E] text-white font-semibold text-xs sm:text-sm hover:bg-[#6B8F7B] transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT ILLUSTRATION - MATCHED WITH HERO RESPONSIVENESS */}
          <div className="w-full lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative w-[320px] h-[320px] max-[390px]:w-[260px] max-[390px]:h-[260px] min-[830px]:max-[960px]:w-[420px] min-[830px]:max-[960px]:h-[420px] xl:w-[380px] xl:h-[380px] flex items-center justify-center">
              
              {/* Background Ambient Glows */}
              <div className="absolute inset-0 bg-[#6B8F7B]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Outer Rotating Dashed Ring */}
              <div className="absolute inset-[-28px] max-[390px]:inset-[-20px] min-[830px]:max-[960px]:inset-[-42px] xl:inset-[-40px] rounded-full border-2 border-dashed border-[#6B8F7B]/60 pointer-events-none animate-spin-slow" />

              {/* Inner Reverse Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-solid border-[#6B8F7B]/40 pointer-events-none animate-spin-reverse bg-gradient-to-tr from-transparent via-[#6B8F7B]/10 to-transparent shadow-[0_0_30px_rgba(107,143,123,0.25)]" />

              {/* Monk Graphic */}
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <img
                  src={Monk}
                  alt="Mindful Strategy Artwork"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(23,34,27,0.15)]"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="absolute -top-4 -left-2 max-[390px]:-left-4 min-[830px]:max-[960px]:-left-8 xl:-left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gray-100 shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#6B8F7B] flex items-center justify-center text-white">
                  <Sparkles size={12} />
                </div>
                <span className="text-xs font-bold text-[#17221B]">Zen Focus</span>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-2 max-[390px]:-right-4 min-[830px]:max-[960px]:-right-8 xl:-right-8 z-20 bg-[#17221B] text-white px-4 py-2 rounded-full border border-white/10 shadow-xl flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-[#6B8F7B]/30 flex items-center justify-center text-[#6B8F7B]">
                  <Zap size={12} />
                </div>
                <span className="text-xs font-medium tracking-wide">Clarity First</span>
              </motion.div>

            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-black text-[#17221B]">{stat.value}</h3>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Baaki ka sections waisa hi hai */}
      <section className="mt-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#17221B] bg-[#6B8F7B]/10 px-3 py-1 rounded-md border border-[#6B8F7B]/20">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17221B] leading-tight">
              Driven by Passion, Focused on Real Business Results
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Starting as a tight-knit collective of tech enthusiasts, we saw a gap in the industry: businesses needed more than just a template website; they needed scalable, high-converting digital assets with real strategic intent.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
              Today, we partner with ambitious startups and established brands worldwide to craft robust web applications, mobile platforms, and high-impact digital marketing frameworks.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#17221B] bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#6B8F7B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-xs relative overflow-hidden group hover:border-[#6B8F7B]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 text-[#17221B] flex items-center justify-center mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#17221B]">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                To empower growing businesses with clean engineering, thoughtful design, and strategic marketing that delivers measurable growth without unnecessary complexity.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-xs relative overflow-hidden group hover:border-[#6B8F7B]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 text-[#17221B] flex items-center justify-center mb-5">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#17221B]">Our Vision</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                To become the premier long-term digital partner for brands globally—setting the standard for clarity, speed, and execution excellence in software and web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#17221B]">Our Ethos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#17221B]">What Drives Our Work</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Principles that guide every line of code we write and every layout we design.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-gray-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 text-[#17221B] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-bold text-lg text-[#17221B]">{val.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-28 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#17221B]">How We Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#17221B]">Our Proven Process</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            A structured, transparent workflow designed to take your idea from concept to execution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p, idx) => (
            <div key={idx} className="relative bg-white p-7 rounded-3xl border border-gray-100 shadow-2xs hover:border-[#6B8F7B]/30 transition-all duration-300">
              <span className="text-4xl font-black text-[#17221B]/30">{p.step}</span>
              <h3 className="mt-4 font-bold text-base text-[#17221B]">{p.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#EBF2EE] via-white to-[#F2F7F4] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#6B8F7B]/25 shadow-xl shadow-[#6B8F7B]/5">
        
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-[#6B8F7B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-72 h-72 bg-[#BCCFC4]/25 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#17221B] bg-[#6B8F7B]/15 border border-[#6B8F7B]/20 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#6B8F7B] animate-pulse" />
                Ready To Grow?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17221B] tracking-tight leading-[1.15]">
                Have a project in mind? <br className="hidden sm:inline" />
                <span className="text-[#6B8F7B]">Let’s build it together.</span>
              </h2>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Turn your business requirements into high-performing digital assets. No fluff, no rigid templates—just tailored execution.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-[#6B8F7B]" />
                  <span className="text-[#17221B]">Free Strategic Discovery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-[#6B8F7B]" />
                  <span className="text-[#17221B]">Proposal in 24 Hours</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#28382E] text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#6B8F7B] transition-all duration-300 shadow-lg shadow-[#17221B]/10 transform hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <Send size={15} />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#17221B] px-7 py-4 rounded-full text-xs sm:text-sm font-semibold hover:border-[#6B8F7B] hover:text-[#6B8F7B] transition-all duration-300 shadow-2xs"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#6B8F7B]/20 shadow-lg shadow-[#6B8F7B]/5 relative overflow-hidden group hover:border-[#6B8F7B]/50 transition-all duration-300">
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#6B8F7B]/10 text-[#17221B] flex items-center justify-center">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Fast Consultation</p>
                      <p className="text-sm font-extrabold text-[#17221B]">Direct Founder Call</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#6B8F7B]/10 text-[#17221B] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Available Now
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-md bg-[#6B8F7B]/10 text-[#17221B] mt-0.5">
                      <Clock size={14} />
                    </div>
                    <div>
                      <span className="font-bold text-[#17221B]">30-Min Discovery Session</span>
                      <p className="text-gray-600 mt-0.5 leading-relaxed">We discuss your targets, tech stack, and growth roadmap.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-md bg-[#6B8F7B]/10 text-[#17221B] mt-0.5">
                      <Zap size={14} />
                    </div>
                    <div>
                      <span className="font-bold text-[#17221B]">Clear Execution Plan</span>
                      <p className="text-gray-600 mt-0.5 leading-relaxed">Get transparent pricing & estimated timelines fast.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-center bg-[#FAFCFB] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-3.5">
                  <span className="text-[11px] font-semibold text-gray-600">
                    💡 No high-pressure sales pitch, just actionable technical insights.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}