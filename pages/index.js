import React from 'react';
import Header from 'components/header';
import Hero from 'components/home/Hero';
import Vision from 'components/home/Vision';
import Services from 'components/home/Services';
import Benefit from 'components/home/Benefit';
import FlowProcess from 'components/home/FlowProcess';
import ContactUs from 'components/home/ContactUs';

export default function Home() {
  return (
    <div className="bg-white-primary min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <Services />
      <Benefit />
      <FlowProcess />
      <ContactUs />
    </div>
  );
}
