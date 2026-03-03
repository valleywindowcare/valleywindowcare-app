"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-navy shadow-md' : 'border-gray-200'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
                            aria-expanded={isOpen}
                        >
                            <span className="font-semibold text-lg text-navy pr-8">
                                {faq.q}
                            </span>
                            <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-navy text-white rotate-180' : 'bg-slate-100 text-gray-500'}`}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="p-6 pt-0 text-gray-600 bg-slate-50">
                                {faq.a}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
