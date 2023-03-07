import Link from 'next/link';
import React from 'react';

export default function Button({ children, href, style }) {
  return (
    <button
      className={`bg-green-primary hover:bg-green-primary-hover transition rounded-xl py-[10px] px-4 text-white-primary font-medium ${style}`}>
      {href ? (
        <Link href={href} scroll={false}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
