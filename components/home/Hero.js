import React from 'react';
import Image from 'next/image';
import Arrow from 'public/assets/icons/arrow-down-hero.svg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const generatePathHero = (display) => {
  const base = '/assets/images';

  if (display.small) return `${base}/hero-mobile.png`;
  if (display.medium) return `${base}/hero-tablet.png`;
  return `${base}/hero.png`;
};

export default function Hero() {
  const { displaySize } = useSelector((state) => state);
  const { t } = useTranslation();
  const sizeArrow = displaySize.small ? 35 : 50;

  return (
    <div id="home" className="max-w-7xl pt-44 mx-auto">
      <div className="lg:flex justify-between px-8 xl:px-0 gap-10">
        <h1
          className="text-black-primary font-semibold text-[40px] md:text-8xl lg:w-8/12 
        leading-[48px] md:leading-[110px] font-inter mb-2 md:mb-0 lg:pr-24 xl:pr-0">
          {t('hero_title')}
        </h1>
        <div className="lg:w-4/12 md:mt-9 relative">
          <h2 className="text-black-primary font-medium text-base md:text-2xl leading-6 md:leading-9 w-[70%] lg:w-auto">
            {t('hero_desc')}
          </h2>
          <Link href="#about-us" scroll={false}>
            <Image
              className="absolute -bottom-10 md:bottom-4 lg:-bottom-8 right-16 lg:right-64 animate-bounce"
              alt="Arrow Down"
              src={Arrow}
              width={sizeArrow}
              height={sizeArrow}
            />
          </Link>
        </div>
      </div>
      <div className="mt-20 md:mt-24 relative h-[375px] rounded-t-[60px] lg:rounded-t-[72px] xl:rounded-t-[80px] overflow-hidden shadow-xl">
        <Image src={generatePathHero(displaySize)} alt="Hero Image" fill className="object-cover" />
      </div>
    </div>
  );
}
