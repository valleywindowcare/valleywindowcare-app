'use client';

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

interface SuccessStateProps {
    onReset: () => void;
}

export default function SuccessState({ onReset }: SuccessStateProps) {
    const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
    const [showConfetti, setShowConfetti] = useState(true);

    // Stop confetti after 5 seconds to reduce CPU load
    useEffect(() => {
        setWindowDimension({ width: window.innerWidth, height: window.innerHeight });

        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 bg-white/95 rounded-2xl relative overflow-hidden">
            {/* Confetti Explosion */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none z-50">
                    <ReactConfetti
                        width={windowDimension.width}
                        height={windowDimension.height}
                        recycle={false}
                        numberOfPieces={200}
                        gravity={0.15}
                        colors={['#1B365D', '#D4AF37', '#ffffff', '#4285F4']}
                    />
                </div>
            )}

            {/* Success Content */}
            <div className="relative z-10 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-green-100">
                    <CheckCircle2 size={40} className="text-green-500" />
                </div>

                <h3 className="text-3xl font-extrabold text-navy mb-4 tracking-tight">Message Received!</h3>

                <p className="text-gray-600 mb-8 max-w-sm leading-relaxed text-lg">
                    Thanks for reaching out! We've received your request and our team will be in touch with you shortly.
                </p>

                {/* Team Trust Element */}
                <div className="flex items-center gap-4 bg-slate-50 border border-gray-100 p-4 rounded-xl mb-8 shadow-sm">
                    <div className="text-center w-full">
                        <p className="text-sm font-bold text-navy">The Valley Window Care Team</p>
                        <p className="text-xs text-gray-500">Exterior Cleaning Professionals</p>
                    </div>
                </div>

                <button
                    onClick={onReset}
                    className="text-navy font-bold hover:text-gold transition-colors text-sm uppercase tracking-wider underline underline-offset-4"
                 aria-label="Close">
                    Submit Another Request
                </button>
            </div>
        </div>
    );
}
