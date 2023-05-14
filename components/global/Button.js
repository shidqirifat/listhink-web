import Link from 'next/link';
import React from 'react';

const ButtonElement = ({ children, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-primary hover:bg-green-primary-hover transition rounded-xl py-[10px] px-4 text-white-primary font-medium ${style}`}>
      {children}
    </button>
  );
};

export default function Button({ children, onClick, href, style }) {
  if (!href) return <ButtonElement style={style}>{children}</ButtonElement>;

  return (
    <Link href={href} scroll={false}>
      <ButtonElement onClick={onClick} style={style}>
        {children}
      </ButtonElement>
    </Link>
  );
}
