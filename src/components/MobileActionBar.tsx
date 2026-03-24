import { Phone, ClipboardList, Calculator } from "lucide-react";
import Link from "next/link";

export default function MobileActionBar() {
    return (
        <div className="md:hidden fixed bottom-0 w-full z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] text-center divide-x divide-white/10">
            <a href="tel:920-609-7085" className="flex-1 bg-navy text-white py-3 flex flex-col items-center justify-center font-bold text-[10px] sm:text-xs tracking-wide hover:bg-navy-dark transition-colors" rel="nofollow">
                <Phone size={18} className="mb-1 text-gold" />
                CALL
            </a>
            <Link href="/pricing" className="flex-grow flex-[1.5] bg-gold text-navy py-3 flex flex-col items-center justify-center font-extrabold text-[12px] sm:text-sm tracking-wide shadow-inner hover:bg-yellow-400 transition-colors" aria-label="Calculate instant price estimate">
                <Calculator size={20} className="mb-1 text-navy" />
                INSTANT PRICE
            </Link>
            <Link href="/contact" className="flex-1 bg-navy text-white py-3 flex flex-col items-center justify-center font-bold text-[10px] sm:text-xs tracking-wide hover:bg-navy-dark transition-colors" aria-label="Request a free quote via the contact form">
                <ClipboardList size={18} className="mb-1 text-gold" />
                QUOTE
            </Link>
        </div>
    );
}
