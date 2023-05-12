import React from 'react';
import Star from 'public/assets/icons/star.svg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Section = ({ children }) => {
  return (
    <h1
      className="text-black-primary font-inter font-semibold text-[40px] md:text-[80px]
     leading-[48px] md:leading-[96px]">
      {children}
    </h1>
  );
};

const Separator = () => {
  const { displaySize } = useSelector((state) => state);
  const size = displaySize.small ? 38 : 76;

  return (
    <div className="flex items-center gap-5 md:gap-4 mt-8 md:mt-1">
      <div className="h-[2px] w-10/12 bg-green-primary" />
      <Image src={Star} alt="Star" width={size} height={size} />
    </div>
  );
};

const CardValue = ({ title, icon, description }) => {
  const { displaySize } = useSelector((state) => state);
  const size = displaySize.small ? 44 : 70;

  return (
    <div className="p-8 rounded-3xl bg-white shadow-md md:w-[29%] h-full md:h-[372px]">
      <div
        className="bg-green-secondary-hover rounded-3xl 
      grid place-content-center w-[72px] md:w-[108px] h-[72px] md:h-[108px]">
        <Image src={`/assets/icons/${icon}.svg`} alt="Trust" width={size} height={size} />
      </div>
      <h3
        className="mt-6 md:mt-7 mb-2 font-inter font-medium text-black-primary 
      text-[32px] md:text-[40px] leading-10 md:leading-[48px]">
        {title}
      </h3>
      <h4 className="text-black-primary text-base md:text-xl leading-6 md:leading-7">
        {description}
      </h4>
    </div>
  );
};

export default function Vision() {
  const { t } = useTranslation();
  return (
    <div className="mt-[30px] py-8 md:pb-24 md:pt-[72px] bg-green-secondary-hover">
      <div className="max-w-7xl px-6 md:px-3 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-32">
          <Section>{t('vision_section')}</Section>
          <h2
            className="text-black-primary font-inter font-medium text-2xl md:text-[40px] 
          leading-7 md:leading-[48px] md:w-8/12">
            {t('vision_title')}
          </h2>
        </div>
        <Separator />
        <div className="mt-8 md:mt-0">
          <Section>{t('value_section')}</Section>
          <div className="flex flex-wrap justify-center gap-8 md:gap-[74px] mt-4 md:mt-9">
            {t('values', { returnObjects: true }).map((value) => (
              <CardValue
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
