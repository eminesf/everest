import { FC } from "react";
import "./styles.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  variant: "confirm" | "cancel" | "delete";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  variant,
  size = "md",
  disabled = false,
  onClick,
  children,
  icon = null,
}) => {
  const Icon = icon;
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
    >
      <div className="button__content">
        {children}
        {Icon && <Icon />}
      </div>
    </button>
  );
};

export { Button };
