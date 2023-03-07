import React from 'react';

export default function Input({ name, value, onChange, placeholder, isError, isTextArea }) {
  const InputWrapper = isTextArea ? 'textarea' : 'input';

  return (
    <InputWrapper
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`text-base leading-6 placeholder:text-netral text-black-primary pb-4 border-b-2 border-b-netral focus:border-b-warning ${
        isError ? '!border-b-danger' : ''
      } ${isTextArea ? 'h-32' : 'mb-10'}`}
    />
  );
}
