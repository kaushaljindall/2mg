import React from 'react';

const experts = [
    {
        name: "Dr. Sarah Chen, PharmD",
        role: "Clinical Pharmacist",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
        specialty: "Supplement Safety"
    },
    {
        name: "Dr. James Wilson, MD",
        role: "Integrative Medicine",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
        specialty: "Holistic Health"
    },
    {
        name: "Emily Davis, RDN",
        role: "Registered Dietitian",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200",
        specialty: "Plant-Based Nutrition"
    },
    {
        name: "Dr. Michael Ross",
        role: "Research Scientist",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200",
        specialty: "Formulations"
    }
];

const AuthorSpotlight = () => {
    return (
        <section className="py-20 bg-gradient-to-tr from-teal-50/50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-mint-100 to-teal-50 blur-[120px] rounded-full opacity-60 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                    Medical Review Board
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Experts Behind the Science</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Our content is rigorously reviewed by a team of licensed professionals to ensure every word is accurate, safe, and trustworthy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-50">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden p-1 bg-gradient-to-br from-teal-400 to-mint-400">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover rounded-full border-2 border-white"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">{expert.name}</h3>
                            <p className="text-teal-600 font-medium text-sm mb-2">{expert.role}</p>
                            <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full font-medium">
                                {expert.specialty}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="mt-12 text-teal-700 font-bold hover:gap-2 transition-all flex items-center justify-center gap-1">
                    View Editorial Policy <span className="text-lg">&rarr;</span>
                </button>
            </div>
        </section>
    );
};

export default AuthorSpotlight;
