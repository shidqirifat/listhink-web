import Image from 'next/image';
import React from 'react';
import ListhinkFull from 'public/assets/logos/listhink-studio.svg';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'components/global/LanguageSwitcher';
import Button from 'components/global/Button';
import Link from 'next/link';
import OrganizedBy from './OrganizedBy';

const TextNav = ({ children, link }) => {
  return (
    <li>
      <Link href={link} scroll={false}>
        <h2 className="font-medium text-base leading-6 text-black-primary capitalize">
          {children}
        </h2>
      </Link>
    </li>
  );
};

export default function DrawerDesktop({ isFooter }) {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl px-3 xl:px-0 mx-auto hidden md:flex justify-between items-center h-20">
      <Image src={ListhinkFull} alt="Logo Listhink Studio" width={128} height={56} />
      <nav>
        <ul className="flex items-center justify-center gap-16">
          {t('navigations', { returnObjects: true }).map((navigation) => (
            <TextNav key={navigation.link} link={navigation.link}>
              {navigation.text}
            </TextNav>
          ))}
        </ul>
      </nav>
      {isFooter ? (
        <OrganizedBy />
      ) : (
        <div className="flex gap-6 items-center">
          <LanguageSwitcher />
          <Button href="#contact-us" style="text-base leading-6">
            {t('lets_discuss')}
          </Button>
        </div>
      )}
    </div>
  );
}
