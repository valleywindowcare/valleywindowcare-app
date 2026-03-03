import { ClipboardList, CalendarCheck, Home, Building2 } from "lucide-react";

interface ProcessProps {
    isCommercial?: boolean;
}

export default function Process({ isCommercial = false }: ProcessProps) {
    const steps = [
        {
            num: "01",
            title: "FREE ESTIMATE",
            desc: "Contact us for a free, no-obligation quote. We'll assess your needs and provide a clear, transparent price.",
            icon: <ClipboardList size={40} className="text-white" />,
        },
        {
            num: "02",
            title: "SCHEDULE WASH",
            desc: "Choose a time that works best for you. We offer flexible scheduling to ensure minimal disruption.",
            icon: <CalendarCheck size={40} className="text-white" />,
        },
        {
            num: "03",
            title: isCommercial ? "ENJOY YOUR PROPERTY" : "ENJOY YOUR HOME",
            desc: "Our expert team arrives on time and delivers a spotless, safe clean, leaving your property looking brand new.",
            icon: isCommercial ? <Building2 size={40} className="text-white" /> : <Home size={40} className="text-white" />,
        },
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-gold font-bold tracking-widest text-sm mb-3">HOW IT WORKS</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy">
                        From Estimate To Completion
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8 lg:gap-16 relative">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gray-200 z-0 border-t-2 border-dashed border-gray-300"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                            {/* Outer Blue Circle */}
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-navy rounded-full flex items-center justify-center mb-8 shadow-xl border-4 border-white group-hover:bg-gold transition-colors duration-500">
                                {/* Inner Icon Circle */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-navy-dark rounded-full flex items-center justify-center shadow-inner group-hover:bg-navy transition-colors duration-500">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="bg-white px-6 py-8 rounded-2xl shadow-lg border border-gray-100 w-full h-full transform transition-transform group-hover:-translate-y-2">
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 font-bold rounded-lg text-xs tracking-wider mb-4">
                                    STEP {step.num}
                                </span>
                                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
