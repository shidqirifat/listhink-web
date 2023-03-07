import { useState } from 'react';

const createObjFromArray = (array, value) => {
  return array.reduce((o, key) => Object.assign(o, { [key]: value }), {});
};

export default function useForm(initForm) {
  const [form, setForm] = useState(createObjFromArray(initForm, ''));
  const [error, setError] = useState(createObjFromArray(initForm, false));

  const resetForm = () => setForm(createObjFromArray(initForm, ''));

  const resetError = (field) => {
    setError((prev) => ({
      ...prev,
      [field]: false
    }));
  };

  const validateError = () => {
    const newError = {};
    for (const input in form) {
      newError[input] = !form[input];
    }

    setError(newError);
  };

  const handleChangeOption = ({ field, value }) => {
    if (error[field]) resetError(field);

    setForm((prev) => ({
      ...prev,
      [field]: value
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

  return {
    form,
    error,
    resetForm,
    validateError,
    handleChangeInput,
    handleChangeOption
  };
}
