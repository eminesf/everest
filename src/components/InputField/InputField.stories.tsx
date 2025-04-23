import { Meta, StoryFn } from "@storybook/react";
import { InputField } from ".";
import React from "react";

export default {
  title: "components/InputField",
  component: InputField,
  argTypes: {
    type: {
      control: "select",
      options: ["search", "newField", "default"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    validate: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = React.useState(args.value || "");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <InputField
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)} // Atualiza o estado local
      />
    </div>
  );
};

export const DefaultInputField = Template.bind({});

DefaultInputField.args = {
  type: "search",
  placeholder: "Default Input Field",
  value: "text",
};
