import Image from 'next/image';
import Arrow from 'public/assets/icons/arrow-option.svg';
import FlagID from 'public/assets/logos/flag-id.svg';
import FlagUS from 'public/assets/logos/flag-us.svg';
import i18n from 'config/i18n';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LANGUAGES = [
  {
    flag: FlagID,
    name: 'ID',
    value: 'id'
  },
  {
    flag: FlagUS,
    name: 'EN',
    value: 'en'
  }
];

const Options = ({ onClick, flag, children, isChecked }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isChecked ? 'bg-green-primary' : 'hover:bg-grey-primary'
      } transition cursor-pointer flex gap-2 items-center p-2`}>
      <Image src={flag} alt="Flag Indonesia" width={24} height={18} />
      <h2 className="text-base leading-6 text-black-primary">{children}</h2>
    </div>
  );
};

export const LanguageSwitcher = () => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const router = useRouter();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push(router.asPath, undefined, { locale: lang, scroll: false });
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpenOption(true)}
        className="cursor-pointer p-2 flex gap-2 items-center">
        <Image
          src={i18n.language === 'id' ? FlagID : FlagUS}
          alt={`Flag ${i18n.language === 'id' ? 'Indonesia' : 'United Kingdom'}`}
          width={28}
          height={24}
        />
        <Image src={Arrow} alt="Arrow Option" width={14} height={8} />
      </div>
      {isOpenOption && (
        <>
          <div onClick={() => setIsOpenOption(false)} className="fixed inset-0 z-[99]" />
          <div
            onClick={() => setIsOpenOption(false)}
            className="absolute z-[99] -bottom-[88px] -left-1 border border-gray-primary/30 bg-white-primary rounded-[4px] shadow-md w-[72px] overflow-hidden">
            {LANGUAGES.map((lang) => (
              <Options
                key={lang.name}
                onClick={() => handleChangeLanguage(lang.value)}
                isChecked={i18n.language === lang.value}
                flag={lang.flag}>
                {lang.name}
              </Options>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
