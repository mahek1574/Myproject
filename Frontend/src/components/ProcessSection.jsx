import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Compass, 
  Code2, 
  Rocket 
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-5 h-5 text-[#6B8F7B]" />,
      title: "Discovery & Planning",
      description:
        "We thoroughly analyze your goals, target audience, and project requirements to map out a strategic roadmap.",
    },
    {
      number: "02",
      icon: <Compass className="w-5 h-5 text-[#6B8F7B]" />,
      title: "Strategy & Design",
      description:
        "We craft modern wireframes and intuitive UI/UX designs that elevate your brand identity and engage users.",
    },
    {
      number: "03",
      icon: <Code2 className="w-5 h-5 text-[#6B8F7B]" />,
      title: "Development & Testing",
      description:
        "We build fast, responsive, and clean code while performing rigorous quality and performance checks.",
    },
    {
      number: "04",
      icon: <Rocket className="w-5 h-5 text-[#6B8F7B]" />,
      title: "Launch & Growth",
      description:
        "We deploy your project seamlessly and offer ongoing support to help your business scale continuously.",
    },
  ];

  return (
    <section className="bg-[#FAFCFB] py-20 px-5 sm:px-8 lg:px-10 border-t border-gray-100/80">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full mb-3"
          >
            How We Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17221B]"
          >
            Our Simple & Proven Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-gray-600 font-medium text-sm sm:text-base leading-relaxed"
          >
            A step-by-step approach to turn your idea into a high-performing digital experience.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
            
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#6B8F7B]/10 border border-[#6B8F7B]/20 flex items-center justify-center group-hover:bg-[#6B8F7B] transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-[#6B8F7B]/30 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                
                <h3 className="text-lg font-bold text-[#17221B] mb-2.5 group-hover:text-[#6B8F7B] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              
              <div className="w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden">
                <div className="w-0 h-full bg-[#6B8F7B] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}