import { Button } from "@/components/Button";
import { FC, useState } from "react";
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io";
import { z } from "zod";
import "./styles.scss";

interface InputFieldProps {
  type: "search" | "newField";
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  validate?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  size = "md",
  placeholder = "Enter the text",
  type = "newField",
  onChange,
  value = "",
  validate = true,
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

  return (
    <>
      <div className={`input-field input-field--${size}`}>
        <input
          className={`input input--${size} ${error ? "input--error" : ""}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {type === "newField" && (
          <Button variant="confirm" icon={IoIosAddCircleOutline} size={size} />
        )}
        {type === "search" && (
          <Button variant="confirm" icon={IoIosSearch} size={size} />
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </>
  );
};

export { InputField };
