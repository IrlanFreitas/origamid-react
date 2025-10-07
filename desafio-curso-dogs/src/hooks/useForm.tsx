import { useState, type ChangeEvent } from "react";

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Preencha com um email válido.",
  },
} as any;

const useForm = (type?: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (value.length === 0) {
      setError("Preencha com um valor.");
      return false;
    } else if (type && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (error) validate(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
