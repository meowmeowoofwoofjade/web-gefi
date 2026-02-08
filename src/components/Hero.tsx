import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image (Placeholder) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    GEFI POWER - Green Energy <br className="hidden md:block" />
                    Investment & Development
                </h1>

                <p className="text-xl md:text-2xl mb-4 font-light drop-shadow-md text-gray-100">
                    Green Energy For Sustainable Future
                </p>

                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md text-gray-200">
                    We connect factory roof owners with professional investment funds. <span className="font-semibold text-accent">No capital investment required.</span>
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center gap-2"
                    >
                        Cooperate with Us
                        <ArrowRight size={20} />
                    </Link>

                    <Link
                        href="#model"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
