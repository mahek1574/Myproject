import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:ml-auto lg:mr-4 w-full"
          >

            <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.18em] text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-2 rounded-full">
              Contact Us
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#17221B] max-w-lg">
              Let's Start a Project Together
            </h2>

            <p className="mt-5 text-gray-500 leading-8 text-base max-w-lg">
              Ready to take your digital presence to the next level?
              Drop us a line and our team will get back to you
              as soon as possible.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#6B8F7B]/10 flex items-center justify-center text-[#6B8F7B] shrink-0">
                  <Mail size={20} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Email Us
                  </p>

                  <p className="mt-1 text-[#17221B] font-semibold">
                    hello@agency.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#6B8F7B]/10 flex items-center justify-center text-[#6B8F7B] shrink-0">
                  <Phone size={20} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Call Us
                  </p>

                  <p className="mt-1 text-[#17221B] font-semibold">
                    +1 (555) 234-5678
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#6B8F7B]/10 flex items-center justify-center text-[#6B8F7B] shrink-0">
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Visit Us
                  </p>

                  <p className="mt-1 text-[#17221B] font-semibold">
                    alberta,canada
                  </p>

                </div>

              </div>

            </div>

          </motion.div>



          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start lg:ml-4 w-full"
          >

            <div className="w-full max-w-2xl bg-[#F8FAF8] border border-gray-100 rounded-[32px] shadow-sm p-6 sm:p-8 lg:p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Emily Carter"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-[#17221B] placeholder:text-gray-400 focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/20 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="123@gmail.com"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-[#17221B] placeholder:text-gray-400 focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/20 focus:outline-none transition-all duration-300"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Project Description
                  </label>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm text-[#17221B] placeholder:text-gray-400 resize-none focus:border-[#6B8F7B] focus:ring-2 focus:ring-[#6B8F7B]/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#6B8F7B] text-white py-4 rounded-2xl font-semibold hover:bg-[#587967] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                  <Send size={18} />
                </motion.button>

                {messageSent && (
                  <p className="text-center text-sm font-semibold text-[#6B8F7B]">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}