import { useState } from 'react';

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = (newValues) => {
    setForm(newValues);
  };

  return [form, onChange, clearForm];
};

export default useForm;
