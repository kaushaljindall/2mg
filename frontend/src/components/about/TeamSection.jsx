import React from 'react';

const TeamSection = () => {
    const team = [
        { name: 'Dr. Sarah Chen', role: 'Chief Pharmacist', bio: 'PharmD with 15 years in clinical research.', color: 'bg-teal-100' },
        { name: 'James Wilson', role: 'Head of Sourcing', bio: 'Supply chain expert specializing in sustainable botanicals.', color: 'bg-blue-100' },
        { name: 'Dr. Emily R.', role: 'Advisory Board', bio: 'PhD in Pharmacology, focusing on animal-free alternatives.', color: 'bg-purple-100' },
        { name: 'Michael Chang', role: 'Community Lead', bio: 'Advocate for transparent healthcare access.', color: 'bg-orange-100' },
    ];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet the Experts</h2>
                        <p className="text-gray-500">The minds behind the mission.</p>
                    </div>
                    {/* Link to full team page could go here */}
                    <button className="text-teal-600 font-bold hover:text-teal-800 transition mt-4 md:mt-0">
                        Join our team &rarr;
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                            <div className={`w-24 h-24 mx-auto rounded-full mb-6 ${member.color} flex items-center justify-center text-2xl font-bold text-gray-700`}>
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{member.name}</h3>
                            <p className="text-teal-600 text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
