import Button from 'components/global/Button';
import { DataList, Options } from 'components/global/DataList';
import Input from 'components/global/Input';
import useForm from 'hooks/useForm';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FORM, generateURLWhatsApp, validateEmptyForm } from './utils';

export default function FormContact() {
  const { form, error, handleChangeInput, handleChangeOption, validateError } = useForm(FORM);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredForm = { ...form };
    delete requiredForm.project;

    if (validateEmptyForm(requiredForm)) return validateError(requiredForm);

    window.open(generateURLWhatsApp(form, t), '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[430px]">
      <Input
        name="name"
        value={form.name}
        onChange={handleChangeInput}
        isError={error.name}
        placeholder={t('form_name_placeholder')}
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
      <Button style="text-xl leading-7 w-full mt-8 md:mt-9">{t('form_contact_button')}</Button>
    </form>
  );
}
