import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InputRadio } from "./index";
import { RadioObjType } from "@/types/to-do";

describe("InputRadio Component", () => {
  const inputRadioObject: RadioObjType[] = [
    {
      filterOption: "all",
    },
    {
      filterOption: "to-do",
    },
    {
      filterOption: "done",
    },
  ];

  it("renders all radio options", () => {
    render(
      <InputRadio
        radioOptions={inputRadioObject}
        name="filter"
        setFilterOption={() => {}}
        filterOption="all"
      />
    );

    inputRadioObject.forEach((option) => {
      const radioLabel = screen.getByLabelText(
        option.filterOption.charAt(0).toUpperCase() +
          option.filterOption.slice(1)
      );
      expect(radioLabel).toBeInTheDocument();
    });
  });

  it("marks the correct radio option as checked", () => {
    render(
      <InputRadio
        radioOptions={inputRadioObject}
        name="filter"
        setFilterOption={() => {}}
        filterOption="to-do"
      />
    );

    const selectedRadio = screen.getByLabelText("To-do");
    expect(selectedRadio).toBeChecked();
  });

  it("calls setFilterOption when a radio option is selected", () => {
    const setFilterOptionMock = vi.fn();

    render(
      <InputRadio
        radioOptions={inputRadioObject}
        name="filter"
        setFilterOption={setFilterOptionMock}
        filterOption="all"
      />
    );

    const doneRadio = screen.getByLabelText("Done");
    fireEvent.click(doneRadio);

    expect(setFilterOptionMock).toHaveBeenCalledWith("done");
  });

  it("renders the radio buttons with the correct name attribute", () => {
    render(
      <InputRadio
        radioOptions={inputRadioObject}
        name="filter"
        setFilterOption={() => {}}
        filterOption="all"
      />
    );

    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute("name", "filter");
    });
  });

  it("renders the labels with the correct text", () => {
    render(
      <InputRadio
        radioOptions={inputRadioObject}
        name="filter"
        setFilterOption={() => {}}
        filterOption="all"
      />
    );

    expect(screen.getByLabelText("All")).toBeInTheDocument();
    expect(screen.getByLabelText("To-do")).toBeInTheDocument();
    expect(screen.getByLabelText("Done")).toBeInTheDocument();
  });
});
