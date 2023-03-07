import React from 'react';

export default function PopUpSuccessForm({ isSuccess }) {
  return (
    <div
      className={`fixed z-20 ${
        isSuccess ? 'opacity-100 bottom-40' : 'opacity-0 bottom-32'
      } transition-all left-[50%] translate-x-[-50%] bg-yellow-secondary rounded-2xl shadow-xl text-center w-[260px] py-3 px-6`}>
      <h2 className="font-medium text-2xl leading-9 text-black-primary mb-1">Pesan Terkirim</h2>
      <h3 className="text-sm leading-5 text-black-primary">
        Request project yang anda buat telah terkirim.
      </h3>
    </div>
  );
}
