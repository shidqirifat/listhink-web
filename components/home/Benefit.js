import Image from 'next/image';
import React from 'react';
import Arrow from 'public/assets/icons/arrow-benefit.svg';
import { Trans, useTranslation } from 'react-i18next';

const Slash = () => <span className="text-yellow-primary">/</span>;

export default function Benefit() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-3 mx-auto mt-[140px] relative">
      <h2 className="pt-[70px] font-inter font-semibold text-[40px] leading-[48px] w-5/12">
        {t('benefit_title')}
      </h2>
      <div className="absolute right-0 top-0 h-[730px] w-7/12 z-10">
        <Image src="/assets/images/benefit-image.png" alt="Benefit" fill />
      </div>
      <div className="bg-green-primary rounded-t-[80px] pt-40 pb-[102px] px-24 mt-20 relative">
        <div className="w-[120px] h-[120px] rounded-full bg-yellow-primary shadow-md absolute -top-14 left-[27%] grid place-content-center">
          <Image src={Arrow} alt="Arrow" width={42} height={42} />
        </div>
        <h1 className="font-inter text-7xl leading-[80px] relative z-10 text-white-primary">
          <Trans i18nKey="benefit_desc">
            <Slash />
          </Trans>
        </h1>
      </div>
    </div>
  );
}
