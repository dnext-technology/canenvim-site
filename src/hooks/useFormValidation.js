/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useFormValidation = (initalState, validate, onSubmit) => {
  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [clickedSubmit, setClickedSubmit] = useState(false);
  const [getInitialValues, setGetInitialValues] = useState({});
  const [getDidInitialValues, setDidGetInitialValues] = useState(false);

  const handleChange = (event, reset) => {
    const onResetValues = reset ? { [reset]: '' } : {};
    if (event.target.name) {
      setValues({
        ...values,
        ...onResetValues,
        [event.target.name]: event.target.value,
      });
    } else if (event.target.getAttribute('name')) {
      setValues({
        ...values,
        ...onResetValues,
        [event.target.getAttribute('name')]: !event.target.checked,
      });
    } else if (event.target.getAttribute('datasecurionpay')) {
      setValues({
        ...values,
        ...onResetValues,
        [event.target.getAttribute('datasecurionpay')]: !event.target.value,
      });
    }
  };

  const setInitialValues = (initialValues) => {
    setGetInitialValues(initialValues);
    setDidGetInitialValues(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (getDidInitialValues) {
        setValues({ ...values, ...getInitialValues });
        setDidGetInitialValues(false);
      }
    }, 100);
  }, [getDidInitialValues, getInitialValues]);

  useEffect(() => {
    if (clickedSubmit) {
      setErrors(validate(values));
    }
  }, [values, clickedSubmit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setClickedSubmit(true);

    if (Object.keys(validate(values)).length < 1) {
      onSubmit(values);
    }
  };

  const reset = () => {
    setValues(initalState);
    setClickedSubmit(false);
    setErrors({});
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    reset,
    setInitialValues,
  };
};

export default useFormValidation;
