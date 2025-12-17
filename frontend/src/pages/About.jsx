import React from 'react';
import Hero from '../components/about/Hero';
import StatsStrip from '../components/about/StatsStrip';
import MissionTimeline from '../components/about/MissionTimeline';
import VerificationSteps from '../components/about/VerificationSteps';
import FeatureGrid from '../components/about/FeatureGrid';
import TeamSection from '../components/about/TeamSection';
import CertificationsCarousel from '../components/about/CertificationsCarousel';
import FAQAccordion from '../components/about/FAQAccordion';
import { SustainabilityBlock, NewsletterCTA } from '../components/about/SustainabilityCTA';

const About = () => {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Hero />
            <StatsStrip />
            <MissionTimeline />
            <VerificationSteps />
            <FeatureGrid />
            <SustainabilityBlock />
            <TeamSection />
            <CertificationsCarousel />
            <FAQAccordion />
            <NewsletterCTA />
        </div>
    );
};

export default About;
