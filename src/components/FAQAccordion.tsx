'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  categoryTitle?: string;
}

export default function FAQAccordion({ faqs, categoryTitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      {categoryTitle ? (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy border-b border-gray-200 pb-2">{categoryTitle}</h2>
        </div>
      ) : (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Common questions about our services in Northeast Wisconsin.</p>
        </div>
      )}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-navy shadow-md' : 'border-gray-200 hover:border-gold/50'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <h3 className={`font-bold pr-8 leading-snug ${isOpen ? 'text-navy text-lg' : 'text-gray-800 text-lg'}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-navy text-white' : 'bg-slate-100 text-navy group-hover:bg-gold/20'}`}>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
