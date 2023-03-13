import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PopUpSuccessForm({ isSuccess }) {
  const { t } = useTranslation();
  return (
    <div
      className={`fixed z-20 ${
        isSuccess ? 'opacity-100 bottom-40' : 'opacity-0 bottom-32'
      } transition-all left-[50%] translate-x-[-50%] bg-yellow-secondary rounded-2xl shadow-xl text-center w-[260px] py-3 px-6`}>
      <h2 className="font-medium text-2xl leading-9 text-black-primary mb-1">
        {t('success_form_title')}
      </h2>
      <h3 className="text-sm leading-5 text-black-primary">{t('success_form_desc')}</h3>
    </div>
  );
}
