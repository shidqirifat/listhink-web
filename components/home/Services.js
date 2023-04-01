import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CardService = ({ title, description, image, number }) => {
  return (
    <div className="flex justify-between items-center gap-16">
      <div className="relative w-[83%]">
        <h1 className="font-semibold text-6xl leading-[70px] text-gray-primary font-inter">
          {number}
        </h1>
        <h2 className="font-semibold text-[40px] leading-[42px] text-black-primary font-inter mt-1 mb-6">
          {title}
        </h2>
        <h3 className="text-2xl leading-8 text-black-primary w-10/12">{description}</h3>
      </div>
      <div className="relative h-[240px] w-[85%] flex justify-end">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useTranslation();
  return (
    <div id="services" className="max-w-7xl px-3 mx-auto pt-[120px]">
      <div className="flex justify-between items-center gap-14">
        <h1 className="text-green-primary font-semibold text-8xl leading-[100px] w-max font-inter">
          {t('service_section')}
        </h1>
        <div className="w-4/12">
          <h4 className="font-semibold text-2xl leading-8 text-black-primary">
            {t('service_desc')}
          </h4>
          <hr className="w-64 border-2 border-green-primary mt-6" />
        </div>
      </div>
      <div className="mt-[60px] flex flex-col gap-[60px]">
        {t('services', { returnObjects: true }).map((service, i) => (
          <CardService key={i} {...service} number={`0${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
