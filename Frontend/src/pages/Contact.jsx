import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Sparkles, CheckCircle2, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$1k - $3k",
    message: "",
  });

  const [activeLocation, setActiveLocation] = useState("canada");
  const [messageSent, setMessageSent] = useState(false);

  
  const mapLocations = {
    canada: {
      title: "Alberta, Canada",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.825682855152!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f5a11c03b13%3A0x2a14e9185a113!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    },
    remote: {
      title: "Worldwide / Remote",
      url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000000!2d0!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    },
  };

  const servicesList = ["Web Dev", "Mobile App", "UI/UX", "SEO / Growth"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({
      name: "",
      email: "",
      service: "Web Development",
      budget: "$1k - $3k",
      message: "",
    });
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F6F9F7] pt-24 pb-16 text-slate-800 relative overflow-hidden">
      
      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6B8F7B]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#4d6b5b] bg-[#6B8F7B]/15 border border-[#6B8F7B]/20 px-3.5 py-1 rounded-full">
            <Sparkles size={13} className="text-[#6B8F7B]" />
            Get In Touch
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's build something <span className="text-[#6B8F7B]">exceptional</span>
          </h1>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            Have a project or question? Drop a message or find us on the map below.
          </p>
        </motion.div>

    
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
        
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/40"
          >
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Send a Message</span>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
    
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Service Needed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {servicesList.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setFormData({ ...formData, service })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all text-center ${
                        formData.service === service
                          ? "bg-[#6B8F7B] text-white shadow-xs"
                          : "bg-slate-50 border border-slate-200/80 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/15 focus:outline-none transition-all"
                />
              </div>

        
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/15 focus:outline-none transition-all"
                />
              </div>

            
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:bg-white focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/15 focus:outline-none transition-all cursor-pointer"
                >
                  <option value="Under $1k">Under $1,000</option>
                  <option value="$1k - $3k">$1,000 - $3,000</option>
                  <option value="$3k - $5k">$3,000 - $5,000</option>
                  <option value="$5k+">$5,000+</option>
                </select>
              </div>

    
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Brief description of your project..."
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 resize-none focus:bg-white focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/15 focus:outline-none transition-all"
                />
              </div>

            
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#6B8F7B] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#577565] transition-all shadow-md shadow-[#6B8F7B]/20"
              >
                <span>Send Proposal Request</span>
                <Send size={14} />
              </motion.button>

              {messageSent && (
                <p className="text-center text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  ✓ Message sent! We'll reply within 24 hours.
                </p>
              )}
            </form>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
        
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:hello@agency.com"
                className="bg-white p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3 hover:border-[#6B8F7B] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center shrink-0 group-hover:bg-[#6B8F7B] group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Email Us</p>
                  <p className="text-xs font-bold text-slate-800 truncate">hello@agency.com</p>
                </div>
              </a>

              <a
                href="tel:+15552345678"
                className="bg-white p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3 hover:border-[#6B8F7B] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center shrink-0 group-hover:bg-[#6B8F7B] group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Call Us</p>
                  <p className="text-xs font-bold text-slate-800 truncate">+1 (555) 234-5678</p>
                </div>
              </a>
            </div>

        
            <div className="bg-white border border-slate-200/80 rounded-3xl p-3 shadow-lg shadow-slate-200/40 relative overflow-hidden">
              
            
              <div className="flex items-center justify-between p-2 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#6B8F7B]" />
                  <span className="text-xs font-bold text-slate-800">Our Presence</span>
                </div>

                <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveLocation("canada")}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      activeLocation === "canada"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Canada HQ
                  </button>
                  <button
                    onClick={() => setActiveLocation("remote")}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      activeLocation === "remote"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Global Remote
                  </button>
                </div>
              </div>

              
              <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-slate-100 relative">
                <iframe
                  title="Agency Location"
                  src={mapLocations[activeLocation].url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />

        
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md border border-slate-200/80 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Globe size={14} className="text-[#6B8F7B]" />
                  <span>{mapLocations[activeLocation].title}</span>
                </div>
              </div>

              <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-[#6B8F7B]" />
                  Avg. Response: &lt; 24h
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-[#6B8F7B]" />
                  NDA Protected
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}