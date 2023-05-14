import React from 'react';
import Hero from 'components/home/Hero';
import AboutUs from 'components/home/AboutUs';
import Vision from 'components/home/Vision';
import Services from 'components/home/Services';
import WhyUs from 'components/home/WhyUs';
import FlowProcess from 'components/home/FlowProcess';
import Wrapper from 'components/global/Wrapper';
import { useTranslation } from 'react-i18next';
import ContactUs from 'components/home/contact/ContactUs';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Wrapper title={t('title_page')}>
      <Hero />
      <AboutUs />
      <Vision />
      <Services />
      <WhyUs />
      <FlowProcess />
      <ContactUs />
    </Wrapper>
  );
}
