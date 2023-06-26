import React from 'react';
import Image from 'next/image';
import Arrow from 'public/assets/icons/arrow-down-hero.svg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Hero() {
  const { displaySize } = useSelector((state) => state);
  const { t } = useTranslation();
  const sizeArrow = displaySize.small ? 35 : 50;

  return (
    <div id="home" className="max-w-7xl md:px-3 pt-44 mx-auto">
      <div className="md:flex justify-between px-6 md:px-0">
        <h1
          className="text-black-primary font-semibold text-[40px] md:text-8xl md:w-8/12 
        leading-[48px] md:leading-[110px] font-inter mb-2 md:mb-0 md:pr-24">
          {t('hero_title')}
          {/* wkwkwk */}
        </h1>
        <div className="md:w-4/12 md:mt-9 relative">
          <h2 className="text-black-primary font-medium text-base md:text-2xl leading-6 md:leading-9 pr-24 md:pr-0">
            {t('hero_desc')}
          </h2>
          <Link href="#about-us" scroll={false}>
            <Image
              className="absolute -bottom-10 md:bottom-0 right-16 md:left-32 animate-bounce"
              alt="Arrow Down"
              src={Arrow}
              width={sizeArrow}
              height={sizeArrow}
            />
          </Link>
        </div>
      </div>
      <div className="mt-20 md:mt-24 relative aspect-[9/10] sm:aspect-[10/3]">
        <Image
          src={`/assets/images/${displaySize.small ? 'hero-mobile' : 'hero'}.png`}
          alt="Hero Image"
          fill
        />
      </div>
    </div>
  );
}
