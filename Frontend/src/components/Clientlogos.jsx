import {
  SiGoogle,
  SiShopify,
  SiMeta,
  SiStripe,
  SiWebflow,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa6";

const logos = [
  { name: "Google", icon: <SiGoogle /> },
  { name: "Shopify", icon: <SiShopify /> },
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Meta", icon: <SiMeta /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Webflow", icon: <SiWebflow /> },
];

export default function ClientLogos() {
  return (
  
    <section className="mt-16 sm:mt-24 md:mt-28 py-12 bg-gradient-to-b from-white via-[#F8FAF8] to-white border-y border-gray-100 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#4F6658]">
          Trusted by 50+ Ambitious Brands & Startups Worldwide
        </p>
      </div>

    
      <div className="relative w-full overflow-hidden py-4">
    
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      
        <div className="flex w-max animate-marquee">
        
          <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 shrink-0">
            {logos.map((client, index) => (
              <div
                key={`1-${index}`}
                className="flex items-center gap-3 group cursor-pointer shrink-0"
              >
                <div className="text-2xl sm:text-3xl text-gray-400 group-hover:text-[#6B8F7B] transition-colors duration-300">
                  {client.icon}
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-400 group-hover:text-[#17221B] transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

      
          <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 shrink-0">
            {logos.map((client, index) => (
              <div
                key={`2-${index}`}
                className="flex items-center gap-3 group cursor-pointer shrink-0"
              >
                <div className="text-2xl sm:text-3xl text-gray-400 group-hover:text-[#6B8F7B] transition-colors duration-300">
                  {client.icon}
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-400 group-hover:text-[#17221B] transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}