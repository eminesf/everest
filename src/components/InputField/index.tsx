import { Button } from "@/components/Button";
import { FC, useState } from "react";
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io";
import { z } from "zod";
import "./styles.scss";

interface InputFieldProps {
  type?: "search" | "newField" | "default";
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  validate?: boolean;
  onButtonClick?: () => void;
}

const InputField: FC<InputFieldProps> = ({
  size = "md",
  placeholder = "Enter the text",
  type = "newField",
  onChange,
  value = "",
  validate = true,
  onButtonClick,
}) => {
  const [error, setError] = useState<string | null>(null);

  const schema = z.string().nonempty("This field cannot be empty");

  const handleValidation = (value: string) => {
    if (!validate) {
      setError(null);
      return;
    }

    try {
      schema.parse(value);
      setError(null);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleValidation(inputValue);
    onChange?.(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onButtonClick && value.trim()) {
      onButtonClick();
    }
  };

  return (
    <div className="input-field-container">
      <div className={`input-field input-field--${size}`}>
        <input
          className={`input input--${size} ${error ? "input--error" : ""}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {type === "newField" && (
          <Button
            variant="confirm"
            icon={IoIosAddCircleOutline}
            size={size}
            onClick={onButtonClick}
            disabled={!value.trim()}
          />
        )}
        {type === "search" && (
          <Button
            variant="confirm"
            icon={IoIosSearch}
            size={size}
            onClick={onButtonClick}
            disabled={!value.trim()}
          />
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export { InputField };
