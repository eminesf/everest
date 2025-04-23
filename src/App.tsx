import { FC, useState } from "react";

import { InputField, InputRadio, TodoItem } from "@/components";
import { useToDoStore } from "@/store/store";
import { useFetchTodoApiList } from "@/hooks/useFetchTodoApiList";
import { RadioObjType } from "@/types/to-do";

import "@/App.scss";
import { SiStorybook } from "react-icons/si";

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

const App: FC = () => {
  const [value, setValue] = useState("");
  const [filterOption, setFilterOption] = useState<"all" | "to-do" | "done">(
    "all"
  );

  const { toDos, createToDo } = useToDoStore();

  useFetchTodoApiList();

  const filteredTodos = toDos.filter((todo) => {
    const formattedDate = todo.createdAt;

    const matchesSearch =
      todo.content.toLowerCase().includes(value.toLowerCase()) ||
      formattedDate.toLowerCase().includes(value.toLowerCase());

    const matchesFilter =
      filterOption === "all" ||
      (filterOption === "to-do" && !todo.checked) ||
      (filterOption === "done" && todo.checked);

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="container">
      <div className="container_content">
        <div className="container_content__logo">
          <img
            src={`${import.meta.env.BASE_URL}everest-logo.svg`}
            alt="everest-logo"
          />{" "}
        </div>
        <InputField
          size="md"
          type="newField"
          placeholder="Search or Add new to-do"
          value={value}
          onChange={(val) => setValue(val)}
          validate={true}
          onButtonClick={() => {
            createToDo(value);
            setValue("");
          }}
        />
        <InputRadio
          name="label"
          setFilterOption={setFilterOption}
          filterOption={filterOption}
          radioOptions={inputRadioObject}
        />
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <a
        href="https://eminesf.github.io/everest/storybook"
        target="_blank"
        rel="noopener noreferrer"
        className="storybook-float-button"
        aria-label="Go to Storybook"
      >
        <SiStorybook size={32} />
      </a>
    </section>
  );
};

export default App;
