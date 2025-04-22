import { FC, useState } from "react";
import { LuPencil, LuTrash2 } from "react-icons/lu";

import { InputField, Button, InputRadio } from "@/components";
import { useToDoStore } from "@/store/store";
import { useFetchTodoApiList } from "@/hooks/useFetchTodoApiList";
import { formatDateTime } from "@/util/formatDateTime";
import { RadioObjType } from "@/types/todo";

import "@/App.scss";

const inputRadioObject: RadioObjType[] = [
  {
    filterOption: "all",
  },
  {
    filterOption: "toDo",
  },
  {
    filterOption: "done",
  },
];

const App: FC = () => {
  const [value, setValue] = useState("");
  const [filterOption, setFilterOption] = useState<"all" | "toDo" | "done">(
    "all"
  );

  const {
    toDos,
    removeToDo: removeTodo,
    updateToDo: updateTodo,
  } = useToDoStore();

  useFetchTodoApiList();

  const filteredTodos = toDos.filter((todo) => {
    const formattedDate = formatDateTime(todo.createdAt);

    const matchesSearch =
      todo.content.toLowerCase().includes(value.toLowerCase()) ||
      formattedDate.toLowerCase().includes(value.toLowerCase());

    const matchesFilter =
      filterOption === "all" ||
      (filterOption === "toDo" && !todo.checked) ||
      (filterOption === "done" && todo.checked);

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="container">
      <div className="container_content">
        <div className="container_content__logo">
          <img src="../public/everest-logo.svg" alt="" />
        </div>
        <InputField
          size="md"
          type="search"
          placeholder="Search"
          value={value}
          onChange={(val) => setValue(val)}
          validate={false}
        />{" "}
        <InputRadio
          name="label"
          setFilterOption={setFilterOption}
          filterOption={filterOption}
          radioOptions={inputRadioObject}
        />
        {filteredTodos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onClick={() =>
                updateTodo(todo.id, {
                  checked: !todo.checked,
                })
              }
            />{" "}
            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
              }}
            >
              {todo.content}
            </span>{" "}
            <span style={{ fontSize: "0.8em", color: "#888" }}>
              - {formatDateTime(todo.createdAt)}
            </span>
            <Button
              size="sm"
              variant="delete"
              icon={LuTrash2}
              onClick={() => removeTodo(todo.id)}
            />
            <Button
              size="sm"
              variant="default"
              icon={LuPencil}
              onClick={() => {}}
            />
          </div>
        ))}
        <div className="container_content__todo">
          <Button variant="confirm">Add new Todo</Button>
        </div>
      </div>
    </section>
  );
};

export default App;
