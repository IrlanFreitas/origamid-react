import type { FC } from "react";
import styles from "./Button.module.scss";

const Button: FC<any> = ({ ...props }) => {
  return <button className={styles.button} {...props}></button>;
};

export default Button;
