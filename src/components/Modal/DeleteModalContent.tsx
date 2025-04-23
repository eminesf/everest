import { useToDoStore } from "@/store/store";
import { ToDo } from "@/types/to-do";
import { FC } from "react";
import { TodoItem, Button } from "@/components";
import { LuTrash2 } from "react-icons/lu";

interface DeleteModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  todo: ToDo;
}

const DeleteModalContent: FC<DeleteModalContentProps> = ({ todo, onClose }) => {
  const { removeToDo } = useToDoStore();

  return (
    <div className="modal">
      <p>Are you sure you want to delete:</p>
      <TodoItem withButton={false} todo={todo} />
      <div className="modal-actions">
        <Button variant="default" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="delete"
          onClick={() => {
            removeToDo(todo.id);
            onClose();
          }}
          icon={LuTrash2}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export { DeleteModalContent };
