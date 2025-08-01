import React, { useState } from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function validate(value) {
    if(type === false) return true;
    if(value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError('');
      return true;
    }
  }

  function onChange({ target }) {
    if(error) validate(target.value)
    setValue(target.value)
  }

  return {value, setValue, error, onChange, onBlur: () => validate(value),  validade: () => validate(value)};
};

export default useForm;
