import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';
import Instagram from 'public/assets/icons/instagram.svg';
import WhatsApp from 'public/assets/icons/whatsapp.svg';
import Arrow from 'public/assets/icons/arrow-benefit.svg';
import FormContact from './FormContact';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { generateURLWhatsApp } from './utils';

const SOCIALS = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/abdanahkam/',
    icon: Instagram
  },
  {
    name: 'WhatsApp',
    link: generateURLWhatsApp(),
    icon: WhatsApp
  }
];

const MenuWrapper = () => {
  const { t } = useTranslation();
  return (
    <div className="md:mt-16">
      <h3 className="font-semibold text-base md:text-xl leading-6 md:leading-7 text-black-primary mb-4">
        Menu
      </h3>
      <div className="flex flex-col md:flex-row gap-[10px] md:gap-6">
        {t('navigations', { returnObjects: true }).map((navigation) => (
          <Link
            key={navigation.link}
            href={navigation.link}
            scroll={false}
            className="font-medium text-sm leading-5 text-black-primary capitalize">
            {navigation.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Socials = () => {
  const { t } = useTranslation();
  return (
    <div className="md:mt-16">
      <h3 className="font-semibold text-base md:text-xl leading-6 md:leading-7 text-black-primary mb-4">
        {t('social_media')}
      </h3>
      <div className="flex flex-col md:flex-row gap-[10px] md:gap-6">
        {SOCIALS.map((social) => (
          <Link key={social.link} href={social.link} target="_blank">
            <button className="flex gap-2 items-center">
              <Image src={social.icon} alt="Instagram Logo" width={24} height={24} />
              <h3 className="text-sm md:text-xl leading-5 md:leading-7 text-black-primary">
                {social.name}
              </h3>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ImageContact = ({ isMobile }) => {
  const styleArrow = isMobile
    ? 'w-[54px] h-[54px] -bottom-6 right-10'
    : 'w-[88px] h-[88px] top-8 -left-10';
  const sizeArrow = isMobile ? 18 : 30;

  return (
    <div className="relative">
      <div
        className={`bg-yellow-primary rounded-full grid place-content-center absolute z-10 ${styleArrow}`}>
        <Image src={Arrow} alt="Arrow" width={sizeArrow} height={sizeArrow} className="rotate-90" />
      </div>
      <div className="relative aspect-square">
        <Image
          src="/assets/images/contact-us.png"
          alt="Contact us image"
          fill
          className="rounded-tl-[80px] shadow-lg"
        />
      </div>
    </div>
  );
};

export default function ContactUs() {
  const { displaySize } = useSelector((state) => state);
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl lg:px-3 xl:px-0 mx-auto mt-[92px] pb-8 md:pb-32 relative">
      <div className="py-8 lg:py-11 px-6 lg:px-16 bg-yellow-primary lg:rounded-[80px]">
        <div className="w-[250px] md:w-[270px] h-[315px] md:h-[350px] absolute left-[50%] translate-x-[-50%] md:left-16 md:translate-x-0 -top-16">
          <Image src="/assets/images/discuss.png" alt="Discussion" fill />
        </div>
        <div className="md:ml-[45%] lg:ml-[40%] mt-60 md:mt-0">
          <h1
            className="font-inter font-semibold text-[40px] md:text-[48px] 
          leading-[48px] md:leading-[58px] text-black-primary mb-8 md:mb-[42px]">
            {t('discuss_title')}
          </h1>
          <Button href="#contact-us" style="text-xl leading-7 px-5 py-3 md:py-4">
            {t('discuss_now')}
          </Button>
        </div>
      </div>
      <div
        id="contact-us"
        className="pt-[86px] md:pt-36 grid md:grid-cols-2 gap-10 md:gap-24 px-6 md:px-8 lg:px-0">
        {displaySize.small && <ImageContact isMobile />}

        <div className="mt-8 md:mt-0">
          <h1 className="font-semibold text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] text-black-primary font-inter">
            {t('contact_us_title')}
          </h1>
          <h2 className="font-medium text-2xl leading-9 text-black-primary mt-4 md:mt-10 mb-10 md:mb-6 md:max-w-xl">
            {t('contact_us_desc')}
          </h2>
          <FormContact />
        </div>
        <div className="grid grid-cols-2 gap-10 md:block sm:ml-10 md:ml-0">
          {displaySize.small ? <MenuWrapper /> : <ImageContact />}
          <Socials />
        </div>
      </div>
    </div>
  );
}
