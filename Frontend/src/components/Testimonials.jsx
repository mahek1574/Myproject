import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Carter",
      role: "Owner, Oak & Pine Studio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      review: "Working with the team was a smooth experience. They understood our requirements, communicated clearly, and delivered a website that we're genuinely proud to share with our customers.",
      rating: 5,
    },
    {
      name: "Daniel Brooks",
      role: "Founder, NorthPeak Digital",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      review: "The project stayed on schedule and every round of feedback was handled quickly. The final result looks modern, performs well, and reflects our brand much better.",
      rating: 5,
    },
    {
      name: "Olivia Bennett",
      role: "Marketing Manager, BrightWave",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      review: "We wanted a clean and professional website, and that's exactly what we received. The attention to detail and overall experience made the process easy from start to finish.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-24 left-0 w-72 h-72 bg-[#6B8F7B]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-24 right-0 w-80 h-80 bg-[#BCCFC4]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once:false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Trusted by Businesses We've Worked With
          </h2>

          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            We focus on building websites that not only look great but are easy
            to use. Here's what some of our clients had to say about working
            with us.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once:false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[30px] border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#6B8F7B]/8 pointer-events-none" />

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={17}
                    className="fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 italic flex-1">
                "{t.review}"
              </p>

              <div className="mt-8 pt-2 border-t border-gray-100 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md ring-2 ring-[#6B8F7B]/15"
                />

                <div>
                  <h4 className="font-semibold text-[#17221B]">
                    {t.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}