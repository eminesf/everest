import { Meta, StoryFn } from "@storybook/react";
import { InputRadio } from ".";
import { RadioObjType } from "@/types/to-do";

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

export default {
  title: "components/InputRadio",
  component: InputRadio,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => {
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
      <InputRadio
        {...args}
        name="label"
        radioOptions={inputRadioObject}
        filterOption={args.filterOption}
        setFilterOption={() => {}}
      />
    </div>
  );
};

export const DefaultInputRadio = Template.bind({});
DefaultInputRadio.args = {};
