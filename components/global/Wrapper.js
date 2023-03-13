import Head from 'next/head';
import React from 'react';
import NavDrawer from './NavDrawer';

export default function Wrapper({ title, children }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <title>Listhink Studio {title ? `- ${title}` : ''}</title>
      </Head>
      <NavDrawer />
      <div className="bg-white-primary min-h-screen">{children}</div>
      <NavDrawer isFooter />
    </div>
  );
}
