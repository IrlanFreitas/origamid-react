import type { FC } from "react";
import styles from "./Input.module.scss";

const Input: FC<any> = ({ label, name, type, value, onChange, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        className={styles.input}
        type={type}
        onChange={onChange}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
