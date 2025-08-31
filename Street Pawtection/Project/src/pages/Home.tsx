import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import RecentRescues from '../components/home/RecentRescues';
import ImpactStats from '../components/home/ImpactStats';
import BlogPreview from '../components/home/BlogPreview';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <RecentRescues />
      <ImpactStats />
      <BlogPreview />
      <CallToAction />
    </>
  );
};

export default Home;