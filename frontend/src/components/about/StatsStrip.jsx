import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth stop
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easeOutQuart * end));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure exact end value
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const StatsStrip = () => {
    const stats = [
        { id: 1, label: 'Products Checked', value: 12000, suffix: '+', icon: '💊' },
        { id: 2, label: 'Pharmacist Reviews', value: 250, suffix: '+', icon: '🩺' },
        { id: 3, label: 'Customer Satisfaction', value: 99, suffix: '%', icon: '⭐' },
        { id: 4, label: 'Certifications', value: 4, suffix: '', icon: '📜' },
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="text-center group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 mx-auto w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tracking-tight">
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
