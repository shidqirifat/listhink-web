import React from 'react';
import Header from 'components/header';
import Hero from 'components/home/Hero';

export default function Home() {
  return (
    <div className="bg-white-primary min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}
