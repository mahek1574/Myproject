import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  Sparkles, 
  Layers, 
  Phone
} from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center bg-[#FAFCFB]">
        <h2 className="text-2xl font-bold text-red-500">Service Not Found</h2>
        <p className="mt-2 text-gray-600">
          The service you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6B8F7B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const relatedServicesKeys = Object.keys(servicesData).filter((key) => key !== id).slice(0, 3);

  const handleHashNavigate = (hashId) => {
    setTimeout(() => {
      const el = document.getElementById(hashId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFCFB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
  
        <Link
          to="/#services"
          onClick={() => handleHashNavigate("services")}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B8F7B] hover:text-[#17221B] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

    
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
              <Sparkles size={13} /> Dedicated Service
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#17221B] tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed">
              {service.subtitle}
            </p>

        
            <div className="mt-8 p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-xs">
              <h2 className="text-xl font-bold text-[#17221B] mb-3 flex items-center gap-2">
                <Layers className="text-[#6B8F7B]" size={20} /> Service Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          </div>

  
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B8F7B]" />
              
              <h3 className="text-lg font-bold text-[#17221B]">Start With This Service</h3>
              <p className="text-xs text-gray-500 mt-1">
                Get a custom execution strategy tailored to your exact requirements.
              </p>

              <div className="mt-6 space-y-3 border-y border-gray-100 py-4 text-xs font-semibold text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6B8F7B]" />
                  <span>Fast Turnaround Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#6B8F7B]" />
                  <span>100% Custom Execution</span>
                </div>
              </div>

              <a
                href="/#contact"
                onClick={() => handleHashNavigate("contact")}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#6B8F7B] hover:bg-[#17221B] text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Book Strategy Call</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>

  
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-[#17221B] mb-6">
            Key Features & What You Get
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-xs hover:border-[#6B8F7B]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#6B8F7B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#17221B]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mt-12 p-8 bg-[#6B8F7B]/5 rounded-3xl border border-[#6B8F7B]/20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B8F7B] mb-4">
            Tools, Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-[#17221B] border border-gray-200 rounded-full text-xs font-bold shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {service.relatedProjects && service.relatedProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2 border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B]">
                  Case Studies
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17221B] mt-1">
                  Recent {service.title} Work
                </h2>
              </div>
              <p className="text-xs font-medium text-gray-500">
                Real results delivered for clients
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {service.relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {project.result && (
                      <span className="absolute top-4 left-4 bg-[#17221B]/90 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md border border-white/10 tracking-wide">
                        {project.result}
                      </span>
                    )}
                  </div>

                  <div className="p-6 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-2.5 py-1 rounded-md">
                      Featured Project
                    </span>
                    <h3 className="text-lg font-bold text-[#17221B] mt-2 group-hover:text-[#6B8F7B] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

    
        <div className="mt-20">
          <div className="border-t border-gray-200/80 pt-12 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] block mb-1">
              Explore More
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
              Other Services You Might Need
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServicesKeys.map((key) => {
              const item = servicesData[key];
              return (
                <Link
                  key={key}
                  to={`/service/${key}`}
                  className="p-6 bg-white border border-gray-100 rounded-3xl shadow-xs hover:shadow-md hover:border-[#6B8F7B]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#17221B] group-hover:text-[#6B8F7B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#6B8F7B]">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        
        <div className="mt-16 bg-gradient-to-br from-[#6B8F7B]/10 via-[#FAFCFB] to-[#6B8F7B]/20 border border-[#6B8F7B]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#6B8F7B] bg-white border border-[#6B8F7B]/20 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
              Let's Collaborate
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
              Ready to grow with {service.title}?
            </h3>
            <p className="mt-2 text-gray-600 text-sm font-medium leading-relaxed">
              Let's build a customized roadmap for your business.
            </p>
          </div>

          <a
            href="/#contact"
            onClick={() => handleHashNavigate("contact")}
            className="shrink-0 bg-[#6B8F7B] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#17221B] hover:shadow-lg transition-all duration-300 shadow-md flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Get Free Quote</span>
          </a>
        </div>

      </div>
    </div>
  );
}