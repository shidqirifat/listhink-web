import Button from 'components/global/Button';
import { DataList, Options } from 'components/global/DataList';
import Input from 'components/global/Input';
import useForm from 'hooks/useForm';
import React, { useState } from 'react';
import PopUpSuccessForm from './PopUpSuccessForm';

const PROJECTS = ['Company Profile', 'UI/UX Design'];
const FORM = ['name', 'email', 'project', 'description'];

export default function FormContact() {
  const { form, error, resetForm, handleChangeInput, handleChangeOption, validateError } =
    useForm(FORM);
  const [isSuccess, setIsSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((input) => !input)) return validateError();

    console.log(form);
    resetForm();
    displaySuccessMessage();
  };

  return (
    <>
      <PopUpSuccessForm isSuccess={isSuccess} />

      <form onSubmit={handleSubmit} className="max-w-[430px]">
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
          {PROJECTS.map((project) => (
            <Options
              key={project}
              onClick={() => handleChangeOption({ field: 'project', value: project })}>
              {project}
            </Options>
          ))}
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
