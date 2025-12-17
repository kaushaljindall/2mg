import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComplianceHero from '../components/compliance/ComplianceHero';
import ComplianceOverview from '../components/compliance/ComplianceOverview';
import CertificationBadges from '../components/compliance/CertificationBadges';
import VerificationProcess from '../components/compliance/VerificationProcess';
import TestingStandards from '../components/compliance/TestingStandards';
import DocumentGrid from '../components/compliance/DocumentGrid';
import ComplianceFAQ from '../components/compliance/ComplianceFAQ';
import EthicalStandards from '../components/compliance/EthicalStandards';

const Compliance = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <ComplianceHero />
                <ComplianceOverview />
                <CertificationBadges />
                <VerificationProcess />
                <TestingStandards />
                <DocumentGrid />
                <EthicalStandards />
                <ComplianceFAQ />

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-24 text-center text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to feel the difference?</h2>
                        <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
                            Experience the peace of mind that comes with verified, premium, plant-based medicine.
                        </p>
                        <a href="/products" className="inline-block px-10 py-4 bg-white text-teal-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Explore Certified Products
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Compliance;
