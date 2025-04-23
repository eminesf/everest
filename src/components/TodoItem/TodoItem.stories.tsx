import { Meta, StoryFn } from "@storybook/react";
import { TodoItem } from ".";
import { ToDo } from "@/types/to-do";

const todoMockChecked: ToDo = {
  id: 1,
  content: "test todo mock",
  checked: true,
  createdAt: "2023-10-01T00:00:00Z",
  finishedAt: "2023-10-01T00:00:00Z",
};
const todoMockUnchecked: ToDo = {
  id: 1,
  content: "test todo mock",
  checked: false,
  createdAt: "2023-10-01T00:00:00Z",
  finishedAt: "2023-10-01T00:00:00Z",
};

export default {
  title: "components/TodoItem",
  component: TodoItem,
  argTypes: {},
} as Meta;

const TemplateChecked: StoryFn = (args) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 20px",
        backgroundColor: "#242424",
      }}
    >
      <TodoItem todo={todoMockChecked} {...args} />
    </div>
  );
};
export const TodoChecked = TemplateChecked.bind({});
TodoChecked.args = {
  withButton: true,
};

const TemplateUnchecked: StoryFn = (args) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 20px",
        backgroundColor: "#242424",
      }}
    >
      <TodoItem todo={todoMockUnchecked} {...args} />
    </div>
  );
};

export const TodoUnchecked = TemplateUnchecked.bind({});
export const TodoUncheckedWithoutButton = TemplateUnchecked.bind({});
TodoUnchecked.args = {
  withButton: true,
};
TodoUncheckedWithoutButton.args = {
  withButton: false,
};
