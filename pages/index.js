import React from 'react';
import Hero from 'components/home/Hero';
import Vision from 'components/home/Vision';
import Services from 'components/home/Services';
import Benefit from 'components/home/Benefit';
import FlowProcess from 'components/home/FlowProcess';
import ContactUs from 'components/home/ContactUs';
import Wrapper from 'components/global/Wrapper';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper title={t('title_page')}>
        <Hero />
        <Vision />
        <Services />
        <Benefit />
        <FlowProcess />
        <ContactUs />
      </Wrapper>
    </>
  );
}
