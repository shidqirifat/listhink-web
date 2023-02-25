import React from 'react';
import Image from 'next/image';
import Arrow from 'public/assets/icons/arrow-down-hero.svg';

export default function Hero() {
  return (
    <div className="max-w-7xl px-3 mx-auto ">
      <div className="flex justify-between mt-24 mb-32">
        <h1 className="text-black-primary font-semibold text-8xl w-8/12 leading-[110px]">
          Diskusikan Bersama Kami.
        </h1>
        <div className="w-4/12 mt-9 relative">
          <h2 className="text-black-primary font-medium text-2xl leading-9">
            Berdedikasi untuk membantu kesuksesan bisnis anda di dunia digital.
          </h2>
          <Image
            className="absolute bottom-0 left-32 animate-bounce"
            src={Arrow}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="rounded-t-[80px] bg-green-primary pt-32 pl-24 pr-32 pb-20">
        <h1 className="mb-6 font-semibold text-[64px] leading-[78px] text-white-primary">
          Kami memiliki pengalaman dan keahlian untuk membantu anda membuat produk.
        </h1>
        <h2 className="font-medium text-2xl leading-9 text-white-primary">
          Dengan mengambil pendekatan kolaboratif untuk membantu mencapai tujuan bisnis anda sesuai
          target.
        </h2>
      </div>
    </div>
  );
}
