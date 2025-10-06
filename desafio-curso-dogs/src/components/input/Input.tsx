import type { FC } from "react";
import styles from "./Input.module.scss";

const Input: FC<any> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
