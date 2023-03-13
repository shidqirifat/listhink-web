import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Vision() {
  const { t } = useTranslation();
  return (
    <div id="about-us" className="max-w-7xl px-3 mx-auto pt-[110px]">
      <div className="pl-24">
        <h3 className="font-medium text-xl leading-7 text-black-primary">Visi & Nilai</h3>
        <h1 className="font-semibold text-[64px] leading-[78px] text-black-primary font-inter mt-6 mb-8 w-10/12">
          {t('vision_title')}
        </h1>
        <h2 className="font-medium text-3xl leading-[48px] text-black-primary w-11/12">
          {t('vision_desc')}
        </h2>
      </div>
    </div>
  );
}
