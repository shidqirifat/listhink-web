import React from 'react';
import Listhink from 'public/assets/logos/logo-listhink.svg';
import Hamburger from 'public/assets/icons/hamburger.svg';
import Close from 'public/assets/icons/close.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Button from 'components/global/Button';
import { LanguageSwitcher } from 'components/global/LanguageSwitcher';
import useToggle from 'hooks/useToggle';

const PopUpDrawer = ({ onToggle, isActive }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`fixed inset-0 bg-white-primary py-10 px-6 flex flex-col gap-10 ${
        isActive ? 'top-0 opacity-100 z-10' : '-top-20 opacity-0 -z-10'
      } transition-all duration-100`}>
      <button
        onClick={onToggle}
        className="h-8 w-8 grid place-content-center absolute top-10 right-6">
        <Image src={Close} alt="Close Drawer" width={18} height={18} />
      </button>
      <div className="text-center mt-28">
        <div className="flex flex-col md:flex-row gap-4">
          {t('navigations', { returnObjects: true }).map((navigation) => (
            <Link
              key={navigation.link}
              href={navigation.link}
              onClick={onToggle}
              scroll={false}
              className="font-medium text-2xl leading-9 text-black-primary capitalize">
              {navigation.text}
            </Link>
          ))}
        </div>
      </div>
      <Button onClick={onToggle} href="#contact-us" style="text-base leading-6 mx-auto block">
        {t('lets_discuss')}
      </Button>
      <div className="flex justify-center">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default function DrawerMobile() {
  const { isPopUp, onToggle } = useToggle();

  return (
    <>
      <PopUpDrawer onToggle={onToggle} isActive={isPopUp} />

      <div className="py-4 px-6 flex justify-between items-center">
        <Image src={Listhink} alt="Logo Listhink Studio" width={26} height={42} />
        <button onClick={onToggle}>
          <Image src={Hamburger} alt="Hamburger Button" width={32} height={32} />
        </button>
      </div>
    </>
  );
}
