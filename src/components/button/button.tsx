import React from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({
  text,
  icon,
  onClick,
  className,
}: ButtonProps) {
  const cnParts = [styles.btnPrimary];
  if (className) {
    cnParts.push(className);
  }

  const cn = cnParts.join(" ");
  return (
    <button onClick={onClick} className={cn}>
      {icon && <span className={`${styles.icon}`}>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
