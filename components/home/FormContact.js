import Button from 'components/global/Button';
import { DataList, Options } from 'components/global/DataList';
import Input from 'components/global/Input';
import useForm from 'hooks/useForm';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PopUpSuccessForm from './PopUpSuccessForm';

const FORM = ['name', 'email', 'project', 'description'];

export default function FormContact() {
  const { form, error, resetForm, handleChangeInput, handleChangeOption, validateError } =
    useForm(FORM);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const validateEmptyForm = () => Object.values(form).some((input) => !input);

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) return true;

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmptyForm()) return validateError();
    if (!validateEmail(form.email)) return validateError('email');

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
          placeholder={t('form_name_placeholder')}
        />
        <Input
          name="email"
          value={form.email}
          onChange={handleChangeInput}
          isError={error.email}
          placeholder={t('form_email_placeholder')}
        />
        <DataList
          placeholder={t('form_project_placeholder')}
          value={form.project}
          isError={error.project}>
          {t('projects', { returnObjects: true }).map((project) => (
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
          placeholder={t('form_project_desc_placeholder')}
          isTextArea
        />
        <Button style="text-xl leading-7 w-full mt-9">{t('form_contact_button')}</Button>
      </form>
    </>
  );
}
