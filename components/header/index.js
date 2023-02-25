import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';

const TextNav = ({ children, link }) => {
  return (
    <li>
      <a href={link}>
        <h2 className="font-medium text-base leading-6 text-black-primary capitalize">
          {children}
        </h2>
      </a>
    </li>
  );
};

export default function Header() {
  return (
    <div className="shadow-sm border-b border-gray-primary sticky top-0 z-10 bg-white-primary">
      <div className="max-w-7xl px-3 mx-auto flex justify-between items-center h-20">
        <Image src="assets/logos/listhink-studio.svg" width={128} height={56} />
        <div>
          <ul className="flex items-center justify-center gap-16">
            <TextNav link="#home">Beranda</TextNav>
            <TextNav link="#about-us">Tentang kami</TextNav>
            <TextNav link="#services">Layanan</TextNav>
          </ul>
        </div>
        <Button>Mari Berdiskusi</Button>
      </div>
    </div>
  );
}
