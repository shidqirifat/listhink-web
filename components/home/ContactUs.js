import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';
import Instagram from 'public/assets/icons/instagram.svg';
import Arrow from 'public/assets/icons/arrow-benefit.svg';
import FormContact from './FormContact';

export default function ContactUs() {
  return (
    <div className="max-w-7xl px-3 mx-auto mt-[92px] mb-32 relative">
      <div className="py-24 px-7 bg-yellow-primary rounded-[80px] text-center">
        <h1 className="font-inter font-semibold text-[80px] leading-[96px] text-black-primary mb-[60px]">
          Diskusikan kebutuhanmu bersama kami{' '}
        </h1>
        <Button style="text-xl leading-7">Diskusi Sekarang</Button>
      </div>
      <div className="mt-36 grid grid-cols-[auto_510px] gap-24">
        <div className="">
          <h1 className="font-semibold text-[80px] leading-[96px] text-black-primary font-inter">
            Hubungi Kami
          </h1>
          <h2 className="font-medium text-2xl leading-9 text-black-primary mt-10 mb-6">
            Silahkan lengkapi form dibawah ini untuk segera berdiskusi bersama kami.
          </h2>
          <FormContact />
        </div>
        <div className="relative">
          <div className="bg-yellow-primary rounded-full w-[88px] h-[88px] grid place-content-center absolute top-8 -left-10">
            <Image src={Arrow} width={30} height={30} className="rotate-90" />
          </div>
          <Image
            src="/assets/images/contact-us.png"
            width={502}
            height={510}
            className="rounded-tl-[80px]"
          />

          <div className="mt-16">
            <h3 className="font-semibold text-xl leading-7 text-black-primary mb-4">
              Sosial Media
            </h3>
            <div className="flex gap-2 items-center">
              <Image src={Instagram} width={24} height={24} />
              <h3 className="text-xl leading-7 text-black-primary">Instagram</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
