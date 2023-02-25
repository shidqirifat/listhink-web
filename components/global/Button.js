import React from 'react';

export default function Button({ children }) {
  return (
    <button className="bg-green-primary hover:bg-green-primary-hover transition rounded-xl py-[10px] px-4 text-white-primary">
      {children}
    </button>
  );
}