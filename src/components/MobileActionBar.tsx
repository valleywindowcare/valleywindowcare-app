import { Phone, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function MobileActionBar() {
    return (
        <div className="md:hidden fixed bottom-0 w-full z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href="tel:920-609-7085" className="flex-1 bg-navy text-white py-4 flex flex-col items-center justify-center font-bold text-sm tracking-wide" rel="nofollow">
                <Phone size={20} className="mb-1" />
                CALL NOW
            </a>
            <Link href="/contact" className="flex-1 bg-gold text-white py-4 flex flex-col items-center justify-center font-bold text-sm tracking-wide" aria-label="Request a free quote via the contact form">
                <ClipboardList size={20} className="mb-1" />
                GET A QUOTE
            </Link>
        </div>
    );
}
