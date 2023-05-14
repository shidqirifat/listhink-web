import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import DrawerDesktop from './DrawerDesktop';
import OrganizedBy from './OrganizedBy';
import DrawerMobile from './DrawerMobile';

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
          <DrawerMobile />
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
