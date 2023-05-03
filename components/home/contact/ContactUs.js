import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';
import Instagram from 'public/assets/icons/instagram.svg';
import Arrow from 'public/assets/icons/arrow-benefit.svg';
import FormContact from './FormContact';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-3 mx-auto mt-[92px] pb-32 relative">
      <div className="py-11 px-16 bg-yellow-primary rounded-[80px]">
        <div className="w-[270px] h-[315px] absolute -top-16">
          <Image src="/assets/images/discuss.png" alt="Discussion" fill />
        </div>
        <div className="ml-[40%]">
          <h1 className="font-inter font-semibold text-[48px] leading-[58px] text-black-primary mb-[42px]">
            {t('discuss_title')}
          </h1>
          <Button href="#contact-us" style="text-xl leading-7 px-5 py-4">
            {t('discuss_now')}
          </Button>
        </div>
      </div>
      <div id="contact-us" className="pt-36 grid grid-cols-[auto_510px] gap-24">
        <div>
          <h1 className="font-semibold text-[80px] leading-[96px] text-black-primary font-inter">
            {t('contact_us_title')}
          </h1>
          <h2 className="font-medium text-2xl leading-9 text-black-primary mt-10 mb-6 max-w-xl">
            {t('contact_us_desc')}
          </h2>
          <FormContact />
        </div>
        <div className="relative">
          <div className="bg-yellow-primary rounded-full w-[88px] h-[88px] grid place-content-center absolute top-8 -left-10">
            <Image src={Arrow} alt="Arrow" width={30} height={30} className="rotate-90" />
          </div>
          <Image
            src="/assets/images/contact-us.png"
            alt="Contact us image"
            width={502}
            height={510}
            className="rounded-tl-[80px]"
          />

          <div className="mt-16">
            <h3 className="font-semibold text-xl leading-7 text-black-primary mb-4">
              {t('social_media')}
            </h3>
            <Link href="https://www.instagram.com/abdanahkam/" target="_blank">
              <button className="flex gap-2 items-center">
                <Image src={Instagram} alt="Instagram Logo" width={24} height={24} />
                <h3 className="text-xl leading-7 text-black-primary">Instagram</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
