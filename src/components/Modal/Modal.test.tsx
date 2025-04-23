import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./index";
import { DeleteModalContent } from "./DeleteModalContent";
import { EditModalContent } from "./EditModal";
import { ToDo } from "@/types/to-do";

describe("Modal Component", () => {
  const mockTodo: ToDo = {
    id: "1",
    content: "Test To-Do",
    checked: false,
    createdAt: "2023-10-01T10:00:00Z",
  };

  const onCloseMock = vi.fn();

  it("renders the DeleteModalContent when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <DeleteModalContent
          isOpen={true}
          todo={mockTodo}
          onClose={onCloseMock}
        />
      </Modal>
    );

    expect(
      screen.getByText("Are you sure you want to delete:")
    ).toBeInTheDocument();
    expect(screen.getByText("Test To-Do")).toBeInTheDocument();
  });

  it("renders the EditModalContent when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <EditModalContent todo={mockTodo} onClose={onCloseMock} isOpen={true} />
      </Modal>
    );

    expect(screen.getByText("Edit:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Edit")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <DeleteModalContent
          isOpen={false}
          todo={mockTodo}
          onClose={onCloseMock}
        />
      </Modal>
    );

    expect(
      screen.queryByText("Are you sure you want to delete:")
    ).not.toBeInTheDocument();
  });

  it("calls onClose when clicking outside the modal content", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <DeleteModalContent
          isOpen={true}
          todo={mockTodo}
          onClose={onCloseMock}
        />
      </Modal>
    );

    const overlay = screen.getByRole("dialog");
    fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it("does not call onClose when clicking inside the modal content", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <DeleteModalContent
          isOpen={true}
          todo={mockTodo}
          onClose={onCloseMock}
        />
      </Modal>
    );

    const modalContent = screen.getByText("Are you sure you want to delete:");

    fireEvent.click(modalContent);

    expect(modalContent).toBeInTheDocument();
  });

  it("calls onClose when clicking the close button", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <DeleteModalContent
          isOpen={true}
          todo={mockTodo}
          onClose={onCloseMock}
        />
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
