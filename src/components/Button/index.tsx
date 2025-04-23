import { FC } from "react";
import "./styles.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  variant: "confirm" | "default" | "delete";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: IconType;
  ariaLabel?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  size = "md",
  disabled = false,
  onClick,
  children,
  icon = null,
  ariaLabel = "",
}) => {
  const Icon = icon;
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
      aria-label={ariaLabel}
    >
      <div className="button__content">
        {children}
        {Icon && <Icon />}
      </div>
    </button>
  );
};

export { Button };
