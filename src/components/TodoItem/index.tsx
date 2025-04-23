import { FC, useState } from "react";
import { Button } from "@/components/Button";
import { ToDo } from "@/types/to-do";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { useToDoStore } from "@/store/store";

import "./styles.scss";
import { Modal } from "../Modal";
import { DeleteModalContent } from "../Modal/DeleteModalContent";
import { EditModalContent } from "../Modal/EditModal";

interface TodoItemProps {
  todo: ToDo;
  withButton?: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ todo, withButton = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModalOpen, setContentModalOpen] = useState<"delete" | "edit">(
    "delete"
  );
  const { toggleToDo } = useToDoStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="todo-item_container">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        children={
          contentModalOpen === "delete" ? (
            <DeleteModalContent
              todo={todo}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          ) : (
            <EditModalContent
              todo={todo}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          )
        }
      />

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
      {withButton ? (
        <div className="todo-item__actions">
          <Button
            size="sm"
            variant="confirm"
            ariaLabel="confirm"
            icon={todo.checked ? ImCheckboxChecked : ImCheckboxUnchecked}
            onClick={() => toggleToDo(todo.id)}
          />
          <Button
            size="sm"
            variant="delete"
            icon={LuTrash2}
            ariaLabel="delete"
            onClick={() => {
              setContentModalOpen("delete");
              openModal();
            }}
          />
          <Button
            size="sm"
            variant="default"
            icon={LuPencil}
            ariaLabel="edit"
            onClick={() => {
              setContentModalOpen("edit");
              openModal();
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export { TodoItem };
