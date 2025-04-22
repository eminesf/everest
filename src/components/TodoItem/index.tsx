import { FC } from "react";
import { Button } from "@/components/Button";
import { ToDo } from "@/types/to-do";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { useToDoStore } from "@/store/store";

import "./styles.scss";

interface TodoItemProps {
  todo: ToDo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { removeToDo, toggleToDo } = useToDoStore();

  return (
    <div key={todo.id} className="todo-item_container">
      <div className="todo-item">
        <span
          className="todo-item_content"
          style={{
            textDecoration: todo.checked ? "line-through" : "none",
          }}
        >
          {todo.content}
        </span>{" "}
        <div>
          <span className="created-finished">Created at {todo.createdAt}</span>
          <span className="created-finished">
            {todo.finishedAt && todo.checked
              ? ` | finished at ${todo.finishedAt}`
              : ""}
          </span>
        </div>
      </div>
      <div className="todo-item__actions">
        <Button
          size="sm"
          variant="confirm"
          icon={todo.checked ? ImCheckboxChecked : ImCheckboxUnchecked}
          onClick={() => toggleToDo(todo.id)}
        />
        <Button
          size="sm"
          variant="delete"
          icon={LuTrash2}
          onClick={() => removeToDo(todo.id)}
        />
        <Button
          size="sm"
          variant="default"
          icon={LuPencil}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export { TodoItem };
