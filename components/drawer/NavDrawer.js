import Image from 'next/image';
import React, { useMemo } from 'react';
import Listhink from 'public/assets/logos/logo-listhink.svg';
import Hamburger from 'public/assets/icons/hamburger.svg';
import { useSelector } from 'react-redux';
import DrawerDesktop from './DrawerDesktop';
import OrganizedBy from './OrganizedBy';

const getStyleContainer = (isFooter) => {
  if (isFooter) return 'border-t';

  return 'shadow-sm border-b fixed top-0 left-0 right-0 z-40';
};

const WrapperDrawer = ({ isFooter, children }) => {
  const TemplateElement = isFooter ? 'footer' : 'header';
  return (
    <TemplateElement
      className={`border-gray-primary bg-white-primary ${getStyleContainer(isFooter)}`}>
      {children}
    </TemplateElement>
  );
};

export default function NavDrawer({ isFooter = false }) {
  const { displaySize } = useSelector((state) => state);

  const isMobile = useMemo(() => {
    if (displaySize.small || displaySize.medium) return true;
  }, [displaySize]);

  if (isMobile) {
    return (
      <WrapperDrawer isFooter={isFooter}>
        {isFooter ? (
          <div className="p-4 text-center">
            <OrganizedBy />
          </div>
        ) : (
          <div className="py-4 px-6 flex justify-between items-center">
            <Image src={Listhink} alt="Logo Listhink Studio" width={26} height={42} />
            <Image src={Hamburger} alt="Hamburger Button" width={32} height={32} />
          </div>
        )}
      </WrapperDrawer>
    );
  }

  return (
    <WrapperDrawer isFooter={isFooter}>
      <DrawerDesktop isFooter={isFooter} />
    </WrapperDrawer>
  );
}
