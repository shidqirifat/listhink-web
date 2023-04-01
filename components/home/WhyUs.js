import React from 'react';
import OkFinger from 'public/assets/icons/ok-finger.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Reason = ({ isActive, children }) => {
  return (
    <button
      className={`rounded-[32px] !border-solid !border-[3px] !border-black-primary py-[18px] transition px-9 inline-block w-max mr-6 mb-6 ${
        isActive ? 'bg-white-primary' : 'hover:bg-white-primary/70'
      }`}>
      <h2
        className={`${
          isActive ? 'font-semibold' : 'font-normal'
        } text-2xl leading-9 text-black-primary`}>
        {children}
      </h2>
    </button>
  );
};

export default function WhyUs() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-3 mx-auto pt-[120px]">
      <div className="rounded-[80px] px-16 py-[88px] bg-[#F0F0F0]">
        <h1 className="font-inter font-semibold text-[60px] leading-[72px] text-black-primary">
          {t('why_us_title')}
        </h1>
        <div className="mt-11 grid grid-cols-2 gap-20">
          <div className="inline">
            <Reason isActive>Ketepatan waktu</Reason>
            <Reason>Efektif</Reason>
            <Reason>Empati</Reason>
            <Reason>Profesional</Reason>
          </div>
          <div className="rounded-[40px] p-8 border-[3px] border-[#7B9684] bg-green-primary shadow-lg">
            <div className="rounded-full p-3 border-2 border-white-primary w-[50px] h-[50px] grid place-content-center">
              <Image src={OkFinger} alt="Ok Finger" width={25} height={25} />
            </div>
            <h3 className="font-medium text-2xl leading-9 text-white-primary mt-4">
              Agency yang tepat untuk meningkatkan digital produk anda.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
