import Button from 'components/global/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import Arrow from 'public/assets/icons/arrow-option.svg';

const Input = ({ name, value, onChange, placeholder, isError, isTextArea }) => {
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
};

const Options = ({ children, onClick }) => {
  return (
    <div
      onClick={() => onClick(children)}
      className="hover:bg-green-secondary transition p-[10px] cursor-pointer">
      <h2 className="text-base leading-6 text-black-primary">{children}</h2>
    </div>
  );
};

const DataList = ({ children, value, isError }) => {
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

export default function FormContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    description: ''
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    project: false,
    description: false
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const resetError = (field) => {
    setError((prev) => ({
      ...prev,
      [field]: false
    }));
  };

  const validateError = () => {
    setError({
      name: !form.name,
      email: !form.email,
      project: !form.project,
      description: !form.description
    });
  };

  const handleChangeOption = (value) => {
    if (error.project) resetError('project');

    setForm((prev) => ({
      ...prev,
      project: value
    }));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (error[name]) resetError(name);

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((input) => !input)) return validateError();

    console.log(form);
    setForm({
      name: '',
      email: '',
      project: '',
      description: ''
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      <div
        className={`fixed z-20 ${
          isSuccess ? 'opacity-100 bottom-40' : 'opacity-0 bottom-32'
        } transition-all left-[50%] translate-x-[-50%] bg-yellow-secondary rounded-2xl shadow-xl text-center w-[260px] py-3 px-6`}>
        <h2 className="font-medium text-2xl leading-9 text-black-primary mb-1">Pesan Terkirim</h2>
        <h3 className="text-sm leading-5 text-black-primary">
          Request project yang anda buat telah terkirim.
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={form.name}
          onChange={handleChangeInput}
          isError={error.name}
          placeholder="Nama Lengkap"
        />
        <Input
          name="email"
          value={form.email}
          onChange={handleChangeInput}
          isError={error.email}
          placeholder="Email"
        />
        <DataList value={form.project} isError={error.project}>
          <Options onClick={handleChangeOption}>Company Profile</Options>
          <Options onClick={handleChangeOption}>UI/UX Design</Options>
        </DataList>
        <Input
          name="description"
          value={form.description}
          onChange={handleChangeInput}
          isError={error.description}
          placeholder="Deskripsi Projek"
          isTextArea
        />
        <Button style="text-xl leading-7 w-full mt-9">Kirim</Button>
      </form>
    </>
  );
}
