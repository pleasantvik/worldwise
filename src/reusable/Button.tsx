import { ReactNode } from "react";
import styles from "@/reusable/Button.module.css";

type IButton = {
  children: ReactNode;
  onClick?: (arg: any) => void;
  type?: "button" | "submit" | "reset";
  buttonType?: "primary" | "back" | "position";
};
const Button = ({ children, onClick, type, buttonType }: IButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${
        buttonType === "primary"
          ? styles.primary
          : buttonType === "back"
          ? styles.back
          : buttonType === "position"
          ? styles.position
          : ""
      }`}
      //   buttonType={buttonType}
    >
      {children}
    </button>
  );
};

export default Button;
