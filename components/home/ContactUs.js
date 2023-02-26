import Button from 'components/global/Button';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-7xl px-3 mx-auto mt-[92px] relative">
      <div className="py-24 px-7 bg-yellow-primary rounded-[80px] text-center">
        <h1 className="font-inter font-semibold text-[80px] leading-[96px] text-black-primary mb-[60px]">
          Diskusikan kebutuhanmu bersama kami{' '}
        </h1>
        <Button style="text-xl leading-7">Diskusi Sekarang</Button>
      </div>
    </div>
  );
}
