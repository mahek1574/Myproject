import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, TrendingUp, TrendingDown, ArrowRight, Zap } from "lucide-react";

export default function SeoComparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-[#F4F7F5] overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
    
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles size={14} /> Visual Business Trajectory
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17221B] leading-tight">
            Which Path Is Your Business On?
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            A quick visual look at how your traffic and revenue scale over time.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div>
    
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3.5 py-1.5 rounded-full">
                  Path A: Without SEO
                </span>
                <TrendingDown className="w-6 h-6 text-gray-400" />
              </div>

              <h3 className="text-2xl font-bold text-[#17221B]">
                Flat Traffic & Endless Ad Spend
              </h3>

              
              <div className="mt-8 space-y-4">
                
                
                <div className="p-4 rounded-2xl bg-[#F4F7F5] border border-gray-200/60 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-600 font-extrabold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Google Search</span>
                    <span className="text-sm font-semibold text-gray-700">Page 3+ (Invisible)</span>
                  </div>
                </div>

            
                <div className="p-4 rounded-2xl bg-[#F4F7F5] border border-gray-200/60 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-600 font-extrabold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Customer Flow</span>
                    <span className="text-sm font-semibold text-gray-700">Stops when Ad Budget pauses</span>
                  </div>
                </div>

    
                <div className="p-4 rounded-2xl bg-[#F4F7F5] border border-gray-200/60 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-600 font-extrabold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Monthly Cost</span>
                    <span className="text-sm font-semibold text-gray-700">Higher CAC every month</span>
                  </div>
                </div>

              </div>
            </div>

    
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase">Long-Term Asset Value</span>
              <span className="text-base font-extrabold text-gray-600">0% Built</span>
            </div>
          </motion.div>


          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false }}
            transition={{ duration: 0.5 }}
            className="bg-[#EAEFEA] rounded-3xl p-6 sm:p-8 border-2 border-[#6B8F7B]/40 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div>
        
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#6B8F7B] px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Zap size={13} /> Path B: With Search Engine Monks
                </span>
                <TrendingUp className="w-6 h-6 text-[#6B8F7B]" />
              </div>

              <h3 className="text-2xl font-bold text-[#17221B]">
                Compounding Organic Growth
              </h3>

              
              <div className="mt-8 space-y-4">
                
            
                <div className="p-4 rounded-2xl bg-white border border-[#6B8F7B]/20 flex items-center gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#6B8F7B] text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                    1
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6B8F7B] uppercase tracking-wider block">Google Search</span>
                    <span className="text-sm font-bold text-[#17221B]">#1 Rank for High-Intent Terms</span>
                  </div>
                </div>

                
                <div className="p-4 rounded-2xl bg-white border border-[#6B8F7B]/20 flex items-center gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#6B8F7B] text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                    2
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6B8F7B] uppercase tracking-wider block">Customer Flow</span>
                    <span className="text-sm font-bold text-[#17221B]">24/7 Consistent Organic Leads</span>
                  </div>
                </div>

            
                <div className="p-4 rounded-2xl bg-white border border-[#6B8F7B]/20 flex items-center gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#6B8F7B] text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                    3
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6B8F7B] uppercase tracking-wider block">Monthly Cost</span>
                    <span className="text-sm font-bold text-[#17221B]">Lower Acquisition Cost Over Time</span>
                  </div>
                </div>

              </div>
            </div>

        
            <div className="mt-8 pt-6 border-t border-[#6B8F7B]/20 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase">Long-Term Asset Value</span>
              <span className="text-xl font-black text-[#6B8F7B] flex items-center gap-1">
                +310% Growth <ArrowUpRight size={20} />
              </span>
            </div>
          </motion.div>

        </div>


        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#6B8F7B] hover:bg-[#587866] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Choose Path B — Start Growing</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}