import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-brand-light">
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <div
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100 rounded-full blur-[100px] mix-blend-multiply"
                    style={{ transform: `translateY(${offset * 0.2}px)` }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-mint rounded-full blur-[80px] mix-blend-multiply"
                    style={{ transform: `translateY(${offset * 0.1}px)` }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-teal-100 shadow-sm animate-fade-in-up">
                    <span className="text-sm font-bold text-teal-700 tracking-wide uppercase">Est. 2024</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Redefining the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Pharmacy Standard</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Aesthesic Programs is the world's first pharmacist-verified platform dedicated to bringing you 100% animal-free and cruelty-free medication.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <button className="px-8 py-4 bg-teal-700 text-white rounded-full font-bold shadow-lg hover:bg-teal-800 hover:shadow-teal-200/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                        Join Newsletter
                    </button>
                    <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                        View Certifications
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
