import { useToDoStore } from "@/store/store";
import { ToDo } from "@/types/to-do";
import { FC, useState } from "react";
import { InputField, Button } from "@/components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

interface EditModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  todo: ToDo;
}

const EditModalContent: FC<EditModalContentProps> = ({ todo, onClose }) => {
  const [value, setValue] = useState(todo.content);
  const [isChecked, setIsChecked] = useState(todo.checked);

  const handleUpdateAndClose = () => {
    updateToDo(todo.id, {
      ...todo,
      content: value,
      checked: isChecked,
    });
    onClose();
  };

  const { updateToDo } = useToDoStore();
  return (
    <div className="modal">
      <p>Edit:</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputField
          type="default"
          value={value}
          placeholder="Edit"
          onChange={(val) => setValue(val)}
          validate={true}
          onButtonClick={handleUpdateAndClose}
        />
        <Button
          size="md"
          variant="confirm"
          icon={isChecked ? ImCheckboxChecked : ImCheckboxUnchecked}
          onClick={() => setIsChecked(!isChecked)}
        />
      </div>
      <div className="modal-actions">
        <Button variant="default" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="confirm"
          onClick={handleUpdateAndClose}
          disabled={!value.trim()}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export { EditModalContent };
