import type { FC } from "react";
import styles from "./Button.module.scss";

const Button: FC<any> = ({ children, ...props }) => {
  return <button className={styles.button} {...props}>{children}</button>;
};

export default Button;
