import React from 'react';
import Star from 'public/assets/icons/star.svg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Section = ({ children }) => {
  return (
    <h1 className="text-black-primary font-inter font-semibold text-[80px] leading-[96px]">
      {children}
    </h1>
  );
};

const Separator = () => {
  return (
    <div className="flex items-center gap-4 mt-1">
      <div className="h-[2px] w-10/12 bg-green-primary" />
      <Image src={Star} alt="Star" width={76} height={76} />
    </div>
  );
};

const CardValue = ({ title, icon, description }) => {
  return (
    <div className="p-8 rounded-3xl bg-white shadow-md w-[29%] h-[372px]">
      <div className="bg-green-secondary-hover rounded-3xl grid place-content-center w-[108px] h-[108px]">
        <Image src={`/assets/icons/${icon}.svg`} alt="Trust" width={70} height={70} />
      </div>
      <h3 className="mt-7 mb-2 font-inter font-medium text-black-primary text-[40px] leading-[48px]">
        {title}
      </h3>
      <h4 className="text-black-primary text-xl leading-7">{description}</h4>
    </div>
  );
};

export default function Vision() {
  const { t } = useTranslation();
  return (
    <div className="mt-[30px] pb-24 pt-[72px] bg-green-secondary-hover">
      <div className="max-w-7xl px-3 mx-auto">
        <div className="flex gap-32">
          <Section>{t('vision_section')}</Section>
          <h2 className="text-black-primary font-inter font-medium text-[40px] leading-[48px] w-8/12">
            {t('vision_title')}
          </h2>
        </div>
        <Separator />
        <div>
          <Section>{t('value_section')}</Section>
          <div className="flex flex-wrap justify-center gap-[74px] mt-9">
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
