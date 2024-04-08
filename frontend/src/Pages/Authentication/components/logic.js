import { useState } from 'react';

function useFormValidation(initialState, validationRules) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const [name, value] = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const rules = validationRules[name];
    console.log(rules);
    let error = '';

    if (rules.required && values.trim() === '') {
      error = 'This field is required';
    }

    setErrors({ ...errors, [name]: error });
    validateForm();
  };

  const validateForm = () => {
    const isValid = Object.values(errors).every((error) => error === '');
    console.log(isValid);
    setIsFormValid(isValid);
  };

  const handleSubmit = () => {
    console.log('clicked');
  };

  return { values, errors, handleChange, handleSubmit, isFormValid };
}

export default useFormValidation;
