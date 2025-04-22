import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./index";

describe("Button Component", () => {
  it("renders the button with text", () => {
    const { getByTestId } = render(<Button variant="confirm">Click Me</Button>);
    expect(getByTestId("button")).toBeInTheDocument();
  });

  it("renders the button with an icon", () => {
    const { container } = render(
      <Button variant="delete" icon={() => <svg data-testid="icon" />} />
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the button with a custom size", () => {
    const { getByTestId } = render(
      <Button variant="default" size="lg">
        Large Button
      </Button>
    );
    expect(getByTestId("button")).toHaveClass("button--lg");
  });

  it("renders the button as disabled", () => {
    const { getByTestId } = render(
      <Button variant="confirm" disabled>
        Disabled Button
      </Button>
    );
    expect(getByTestId("button")).toBeDisabled();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <Button variant="confirm" onClick={handleClick}>
        Click Me
      </Button>
    );
    getByTestId("button").click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders the button with children", () => {
    const { getByTestId } = render(
      <Button variant="confirm">Button with Children</Button>
    );
    expect(getByTestId("button")).toHaveTextContent("Button with Children");
  });

  it("render with the different variants", () => {
    const { getByTestId } = render(
      <Button variant="confirm">Confirm Button</Button>
    );
    expect(getByTestId("button")).toHaveClass("button--confirm");
  });
});
