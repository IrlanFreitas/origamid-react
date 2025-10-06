import type { FC } from "react";
import styles from "./Input.module.scss";

const Input: FC<any> = ({ label, name, type, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} name={name}className={styles.input} type={type} {...props} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
