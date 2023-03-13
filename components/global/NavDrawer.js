import Button from 'components/global/Button';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

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
  const { t } = useTranslation();
  const TemplateElement = isFooter ? 'footer' : 'header';

  return (
    <TemplateElement
      className={`border-gray-primary bg-white-primary ${getStyleContainer(isFooter)}`}>
      <div className="max-w-7xl px-3 mx-auto flex justify-between items-center h-20">
        <Image
          src="assets/logos/listhink-studio.svg"
          alt="Logo Listhink Studio"
          width={128}
          height={56}
        />
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
          <h2 className="text-base font-medium leading-6 text-black-primary">
            &#169; {new Date().getFullYear()} Listhink Studio
          </h2>
        ) : (
          <div className="flex gap-6 items-center">
            <LanguageSwitcher />
            <Button href="#contact-us" style="text-base leading-6">
              {t('lets_discuss')}
            </Button>
          </div>
        )}
      </div>
    </TemplateElement>
  );
}
