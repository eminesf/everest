import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { TodoItem } from "./index";
import { ToDo } from "@/types/to-do";
import { useToDoStore } from "@/store/store";

vi.mock("@/store/store", () => ({
  useToDoStore: vi.fn(),
}));

describe("TodoItem Component", () => {
  const mockTodo: ToDo = {
    id: "1",
    content: "Test To-Do",
    checked: false,
    createdAt: "2023-10-01T10:00:00Z",
    finishedAt: "2023-10-02T12:00:00Z",
  };

  const toggleToDoMock = vi.fn();
  beforeEach(() => {
    (useToDoStore as unknown as Mock).mockReturnValue({
      toggleToDo: toggleToDoMock,
    });
  });

  it("renders the todo content", () => {
    render(<TodoItem todo={mockTodo} />);
    expect(screen.getByText("Test To-Do")).toBeInTheDocument();
  });

  it("renders the creation date", () => {
    render(<TodoItem todo={mockTodo} />);
    expect(
      screen.getByText(/Created at 2023-10-01T10:00:00Z/i)
    ).toBeInTheDocument();
  });

  it("renders the finished date when the todo is completed", () => {
    const completedTodo = {
      ...mockTodo,
      checked: true,
      finishedAt: "2023-10-02T12:00:00Z",
    };
    render(<TodoItem todo={completedTodo} />);
    expect(
      screen.getByText(/finished at 2023-10-02T12:00:00Z/i)
    ).toBeInTheDocument();
  });

  it("calls toggleToDo when the confirm button is clicked", () => {
    render(<TodoItem todo={mockTodo} />);
    const toggleButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.click(toggleButton);
    expect(toggleToDoMock).toHaveBeenCalledWith("1");
  });

  it("opens the delete modal when the delete button is clicked", () => {
    render(<TodoItem todo={mockTodo} />);
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(
      screen.getByText("Are you sure you want to delete:")
    ).toBeInTheDocument();
  });

  it("opens the edit modal when the edit button is clicked", () => {
    render(<TodoItem todo={mockTodo} />);
    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);
    expect(screen.getByText("Edit:")).toBeInTheDocument();
  });

  it("does not render action buttons when withButton is false", () => {
    render(<TodoItem todo={mockTodo} withButton={false} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
