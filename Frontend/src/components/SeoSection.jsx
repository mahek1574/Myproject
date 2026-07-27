import { motion } from "framer-motion";
import { TrendingUp, Target, ShieldCheck, Zap, BarChart3, Users, ArrowRight, Sparkles } from "lucide-react";

export default function SeoSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#6B8F7B]" />,
      title: "Increased Organic Traffic",
      description: "Get steady, qualified traffic to your website without paying for every single click.",
    },
    {
      icon: <Target className="w-6 h-6 text-[#6B8F7B]" />,
      title: "High-Intent Customer Targeting",
      description: "Reach customers at the exact moment they are actively searching for your services.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6B8F7B]" />,
      title: "Builds Trust & Authority",
      description: "Higher search engine rankings position your brand as an industry leader and trustworthy choice.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#6B8F7B]" />,
      title: "Higher Conversion Rates",
      description: "Optimized user experience and targeted traffic lead to more leads, sales, and sign-ups.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#6B8F7B]" />,
      title: "Long-Term Digital Value",
      description: "Unlike paid ads that stop working when budget ends, SEO delivers sustained compounding ROI.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#6B8F7B]" />,
      title: "Outrank Your Competition",
      description: "Capture market share from competitors who aren't fully capitalizing on search visibility.",
    },
  ];

  return (
    <section id="seo-benefits" className="py-20 lg:py-28 bg-[#F8FAF8] overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-2 rounded-full">
            <Sparkles size={14} /> Why SEO Matters
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#17221B]">
            Drive Real Business Growth with Powerful Search Engine Optimization
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed text-base sm:text-lg">
            SEO isn't just about rankings—it's about connecting your business with people who are ready to buy. Here is how modern SEO transforms your digital growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#6B8F7B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#17221B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white border border-[#6B8F7B]/20 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
        >
          <div className="max-w-2xl">
            <h4 className="text-2xl font-bold text-[#17221B]">
              Ready to dominate search rankings?
            </h4>
            <p className="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
              Get a complimentary SEO audit of your website and discover untapped opportunities for organic growth.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#6B8F7B] hover:bg-[#587866] text-white px-7 py-3.5 rounded-2xl font-semibold transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Get Free SEO Audit
            <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}