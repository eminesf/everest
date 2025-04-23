import { Meta, StoryFn } from "@storybook/react";
import { Button } from ".";
import { LuPencil } from "react-icons/lu";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["confirm", "default", "delete"],
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#808080",
    }}
  >
    <Button variant={args.confirm} {...args} />
  </div>
);

export const ButtonWithIcon = Template.bind({});
export const ButtonWithOnlyIcon = Template.bind({});
export const ButtonWithoutIcon = Template.bind({});

ButtonWithIcon.args = {
  variant: "confirm",
  icon: LuPencil,
  children: "Button with Icon",
};
ButtonWithOnlyIcon.args = {
  variant: "confirm",
  icon: LuPencil,
};
ButtonWithoutIcon.args = {
  variant: "confirm",
  children: "Button with Icon",
};
