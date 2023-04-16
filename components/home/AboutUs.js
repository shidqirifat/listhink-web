import React from 'react';
import Think from 'public/assets/icons/arrow-think.svg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-3 -mt-12 mx-auto">
      <div id="about-us" className="pt-28 relative">
        <h2 className="font-semibold text-2xl leading-9 text-green-primary tracking-wide">
          {t('about_us_section')}
        </h2>
        <div className="w-32 border-2 border-green-primary mt-2" />
        <h1 className="mt-7 mb-6 font-semibold text-[48px] leading-[58px] text-black-primary font-inter w-9/12">
          {t('hero_title_2')}
        </h1>
        <div className="flex justify-between">
          <h2 className="text-2xl leading-9 text-black-primary w-6/12">{t('hero_desc_2')}</h2>
          <div className="relative w-[310px] h-[150px] bottom-12 right-8">
            <Image src={Think} alt="Think" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
