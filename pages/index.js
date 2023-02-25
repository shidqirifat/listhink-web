import React from 'react';
import Header from 'components/header';
import Hero from 'components/home/Hero';
import Vision from 'components/home/Vision';
import Services from 'components/home/Services';

export default function Home() {
  return (
    <div className="bg-white-primary min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <Services />
    </div>
  );
}
