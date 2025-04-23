import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InputField } from "./index";

describe("InputField Component", () => {
  it("renders the input field with placeholder", () => {
    render(<InputField placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when typing in the input field", () => {
    const handleChange = vi.fn();
    render(<InputField onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "New value" } });
    expect(handleChange).toHaveBeenCalledWith("New value");
  });

  it("does not display an error message when validation is disabled", () => {
    render(<InputField validate={false} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "" } });
    const errorMessage = screen.queryByText("This field cannot be empty");
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("calls onButtonClick when the button is clicked", () => {
    const handleButtonClick = vi.fn();
    render(
      <InputField
        type="newField"
        value="Test"
        onButtonClick={handleButtonClick}
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleButtonClick).toHaveBeenCalled();
  });

  it("disables the button when the input value is empty", () => {
    render(<InputField type="newField" value="" />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("enables the button when the input value is not empty", () => {
    render(<InputField type="newField" value="Test" />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  it("calls onButtonClick when Enter key is pressed", () => {
    const handleButtonClick = vi.fn();
    render(
      <InputField
        type="newField"
        value="Test"
        onButtonClick={handleButtonClick}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(handleButtonClick).toHaveBeenCalled();
  });

  it("renders the correct icon for 'newField' type", () => {
    render(<InputField type="newField" value="Test" />);
    const icon = screen.getByTestId("button").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders the correct icon for 'search' type", () => {
    render(<InputField type="search" value="Test" />);
    const icon = screen.getByTestId("button").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
