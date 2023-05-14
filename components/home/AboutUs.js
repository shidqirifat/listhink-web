import React from 'react';
import Think from 'public/assets/icons/arrow-think.svg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-6 md:px-3 -mt-12 md:-mt-12 mx-auto">
      <div id="about-us" className="pt-24 md:pt-28 relative">
        <h2 className="font-semibold text-xl md:text-2xl leading-7 md:leading-9 text-green-primary tracking-wide">
          {t('about_us_section')}
        </h2>
        <div className="w-32 border-b-2 md:border-2 border-green-primary mt-2" />
        <h1
          className="my-5 md:mt-7 md:mb-6 font-semibold text-2xl md:text-[48px] leading-7 md:leading-[58px]
         text-black-primary font-inter w-[92%] md:w-9/12">
          {t('hero_title_2')}
        </h1>
        <div className="flex justify-between">
          <h2 className="text-base md:text-2xl leading-6 md:leading-9 text-black-primary w-[92%] md:w-6/12">
            {t('hero_desc_2')}
          </h2>
          <div className="relative w-[310px] h-[150px] bottom-12 right-8 hidden md:block">
            <Image src={Think} alt="Think" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
