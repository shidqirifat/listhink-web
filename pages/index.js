import React from 'react';

export default function Home({ __ }) {
  return (
    <div className="grid place-content-center h-screen bg-slate-100">
      <h1 className="text-sky-700 font-semibold leading-5 text-4xl">{__('hello')} World!</h1>
    </div>
  );
}
