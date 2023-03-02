import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';

const navigations = [
  {
    link: '#home',
    text: 'Beranda'
  },
  {
    link: '#about-us',
    text: 'Tentang kami'
  },
  {
    link: '#services',
    text: 'Layanan'
  }
];

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

const getStyleContainer = (isFooter) => {
  if (isFooter) return 'border-t';

  return 'shadow-sm border-b fixed top-0 left-0 right-0 z-40';
};

export default function NavDrawer({ isFooter = false }) {
  return (
    <div className={`border-gray-primary bg-white-primary ${getStyleContainer(isFooter)}`}>
      <div className="max-w-7xl px-3 mx-auto flex justify-between items-center h-20">
        <Image
          src="assets/logos/listhink-studio.svg"
          alt="Logo Listhink Studio"
          width={128}
          height={56}
        />
        <div>
          <ul className="flex items-center justify-center gap-16">
            {navigations.map((navigation) => (
              <TextNav key={navigation.link} link={navigation.link}>
                {navigation.text}
              </TextNav>
            ))}
          </ul>
        </div>
        {isFooter ? (
          <h2 className="text-base font-medium leading-6 text-black-primary">
            &#169; 2023 Listhink Studio
          </h2>
        ) : (
          <Button style="text-base leading-6">Mari Berdiskusi</Button>
        )}
      </div>
    </div>
  );
}
