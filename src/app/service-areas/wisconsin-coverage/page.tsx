import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Wisconsin Service Area Coverage',
    description: 'Comprehensive service area directory for Northeast Wisconsin. Valley Property Services serves Green Bay, Appleton, Door County, and surrounding satellite communities.',
};

export default function WisconsinCoverageMatrix() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-navy pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                        Northeast Wisconsin <span className="text-gold">Coverage Matrix</span>
                    </h1>
                    <p className="text-xl text-gray-300 md:text-2xl font-light">
                        Rapid deployment exterior restoration directly to your municipality.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    {/* GREEN BAY HUB */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                        <h2 className="text-3xl font-extrabold text-navy mb-4 border-b-2 border-gold pb-4">
                            <Link href="/service-areas/green-bay" className="hover:text-gold transition-colors">
                                Greater Green Bay Hub
                            </Link>
                        </h2>
                        <ul className="space-y-3 font-medium text-gray-600 text-lg">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/allouez" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Allouez</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/howard" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Howard</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/de-pere" className="hover:text-gold underline decoration-gray-300 underline-offset-4">De Pere</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/ashwaubenon" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Ashwaubenon</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/suamico" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Suamico</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/bellevue" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Bellevue</Link>
                            </li>
                        </ul>
                    </div>

                    {/* APPLETON HUB */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                        <h2 className="text-3xl font-extrabold text-navy mb-4 border-b-2 border-gold pb-4">
                            <Link href="/service-areas/appleton" className="hover:text-gold transition-colors">
                                Fox Cities Hub (Appleton)
                            </Link>
                        </h2>
                        <ul className="space-y-3 font-medium text-gray-600 text-lg">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/little-chute" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Little Chute</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/menasha" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Menasha</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/kaukauna" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Kaukauna</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/neenah" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Neenah</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/greenville" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Greenville</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/kimberly" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Kimberly</Link>
                            </li>
                        </ul>
                    </div>

                    {/* DOOR COUNTY HUB */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                        <h2 className="text-3xl font-extrabold text-navy mb-4 border-b-2 border-gold pb-4">
                            <Link href="/service-areas/door-county" className="hover:text-gold transition-colors">
                                Door County Peninsula Hub
                            </Link>
                        </h2>
                        <ul className="space-y-3 font-medium text-gray-600 text-lg">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/sturgeon-bay" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Sturgeon Bay</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/egg-harbor" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Egg Harbor</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/fish-creek" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Fish Creek</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> <Link href="/service-areas/sister-bay" className="hover:text-gold underline decoration-gray-300 underline-offset-4">Sister Bay</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> Ephraim
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-navy rounded-full"></div> Baileys Harbor
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 text-center bg-navy p-16 rounded-3xl border border-gold/30 shadow-2xl">
                    <h3 className="text-4xl font-extrabold text-white mb-6">Transparent Local Pricing</h3>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Regardless of your municipality, our standards remain exact. Review our verified 2026 baseline estimates and instantly calculate your exact property specifications.
                    </p>
                    <Link href="/pricing" className="inline-block bg-gold text-navy font-extrabold text-xl px-12 py-5 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        View The 2026 Price Guide
                    </Link>
                </div>
            </section>
        </main>
    )
}
