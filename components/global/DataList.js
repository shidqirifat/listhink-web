import Image from 'next/image';
import Arrow from 'public/assets/icons/arrow-option.svg';
import { useState } from 'react';

export const Options = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="hover:bg-green-secondary transition p-[10px] cursor-pointer">
      <h2 className="text-base leading-6 text-black-primary">{children}</h2>
    </div>
  );
};

export const DataList = ({ children, value, isError }) => {
  const [isOpenOption, setIsOpenOption] = useState(false);

  return (
    <div className="mb-10 relative">
      <div onClick={() => setIsOpenOption(true)} className="cursor-pointer">
        <h3
          className={`text-base leading-6 ${
            value ? 'text-black-primary' : 'text-netral'
          } pb-4 border-b-2 border-b-netral ${isError ? '!border-b-danger' : ''}`}>
          {value || 'Pilih Projek'}
        </h3>
        <Image
          src={Arrow}
          alt="Arrow Option"
          width={12}
          height={8}
          className="absolute right-2 top-2"
        />
      </div>
      {isOpenOption && (
        <>
          <div onClick={() => setIsOpenOption(false)} className="fixed inset-0 z-[99]" />
          <div
            onClick={() => setIsOpenOption(false)}
            className="absolute z-[99] -bottom-20 left-0 right-0 bg-white-primary rounded-lg shadow-option">
            {children}
          </div>
        </>
      )}
    </div>
  );
};
