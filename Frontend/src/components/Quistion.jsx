import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SEO and how does it help my business?",
    answer:
      "SEO improves your website's visibility on search engines, helping you attract more qualified visitors and generate long-term organic leads.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses notice measurable improvements within 3–6 months, depending on competition and the current state of the website.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "No ethical agency can guarantee rankings. We focus on sustainable strategies that improve visibility and long-term growth.",
  },
  {
    question: "What SEO services do you provide?",
    answer:
      "We offer keyword research, technical SEO, on-page optimization, content strategy, link building, and monthly reporting.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact our team. We'll analyze your website and create a customized SEO strategy tailored to your goals.",
  },
];

export default function Quistion() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#F8FAF8]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Find answers to the most common questions about our SEO services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full px-7 py-6 flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-bold text-[#17221B]">
                  {faq.question}
                </h3>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    active === index
                      ? "bg-[#6B8F7B] text-white rotate-180"
                      : "bg-[#BCCFC4]/20 text-[#17221B]"
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-7 pb-6 text-gray-500 leading-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}