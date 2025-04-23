import { FC } from "react";
import "./styles.scss";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
