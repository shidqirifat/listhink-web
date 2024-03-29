import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const CardService = ({ title, description, image, image_mobile, number }) => {
  const { displaySize } = useSelector((state) => state);
  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-6 lg:gap-16">
      <div className="relative lg:w-[83%]">
        <h1
          className="font-semibold text-[40px] md:text-6xl leading-[48px] md:leading-[70px]
         text-gray-primary font-inter">
          {number}
        </h1>
        <h2 className="font-semibold text-2xl md:text-[40px] leading-7 md:leading-[42px] text-black-primary font-inter mt-1 mb-4 md:mb-6">
          {title}
        </h2>
        <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-black-primary md:w-10/12 pr-4 md:print:">
          {description}
        </h3>
      </div>
      <div className="relative aspect-[9/5] h-[180px] flex justify-end">
        <Image
          src={displaySize.small ? image_mobile : image}
          alt={title}
          fill
          className="object-cover rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useTranslation();
  return (
    <div
      id="services"
      className="max-w-7xl px-8 lg:px-3 mx-auto -mt-10 md:mt-0 pt-20 md:pt-[100px]">
      <div className="flex justify-between lg:items-center flex-col md:flex-row gap-6 lg:gap-14">
        <h1
          className="text-green-primary font-semibold text-[40px] md:text-5xl lg:text-8xl
         leading-[48px] lg:leading-[100px] md:w-max font-inter">
          {t('service_section')}
        </h1>
        <div className="md:w-[46%] lg:w-4/12">
          <h4 className="font-semibold text-2xl md:text-2xl leading-7 md:leading-8 text-black-primary">
            {t('service_desc')}
          </h4>
          <hr className="w-[80%] md:w-64 border-b-2 md:border-2 border-green-primary mt-6" />
        </div>
      </div>
      <div className="mt-9 md:mt-10 lg:mt-[60px] flex flex-col gap-10 md:gap-[60px]">
        {t('services', { returnObjects: true }).map((service, i) => (
          <CardService key={i} {...service} number={`0${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
