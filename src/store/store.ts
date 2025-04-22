import { ToDo } from "@/types/to-do";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type todoStore = {
  toDos: ToDo[];
  setToDos: (todos: ToDo[]) => void;
  createToDo: (content: string) => void;
  removeToDo: (id: number | string) => void;
  toggleToDo: (id: number | string) => void;
  updateToDo: (id: number | string, updatedToDo: Partial<ToDo>) => void;
  sortToDos: () => void;
};

export const useToDoStore = create<todoStore>()(
  persist(
    (set) => ({
      toDos: [],
      setToDos: (todos) =>
        set({
          toDos: todos.sort((a, b) => {
            if (a.checked === b.checked) {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }
            return Number(a.checked) - Number(b.checked);
          }),
        }),
      createToDo: (content) =>
        set((state) => {
          const todo: ToDo = {
            id: crypto.randomUUID(),
            content,
            checked: false,
            createdAt: new Date().toISOString(),
          };
          const updatedTodos = [...state.toDos, todo];
          return {
            toDos: updatedTodos.sort((a, b) => {
              if (a.checked === b.checked) {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              }
              return Number(a.checked) - Number(b.checked);
            }),
          };
        }),
      removeToDo: (id) =>
        set((state) => {
          const updatedTodos = state.toDos.filter((todo) => todo.id !== id);
          return {
            toDos: updatedTodos.sort((a, b) => {
              if (a.checked === b.checked) {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              }
              return Number(a.checked) - Number(b.checked);
            }),
          };
        }),
      toggleToDo: (id) =>
        set((state) => {
          const updatedTodos = state.toDos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  checked: !todo.checked,
                  finishedAt: new Date().toISOString(),
                }
              : todo
          );
          return {
            toDos: updatedTodos.sort((a, b) => {
              if (a.checked === b.checked) {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              }
              return Number(a.checked) - Number(b.checked);
            }),
          };
        }),
      updateToDo: (id, updatedTodo) =>
        set((state) => {
          const updatedTodos = state.toDos.map((todo) =>
            todo.id === id ? { ...todo, ...updatedTodo } : todo
          );
          return {
            toDos: updatedTodos.sort((a, b) => {
              if (a.checked === b.checked) {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              }
              return Number(a.checked) - Number(b.checked);
            }),
          };
        }),
      sortToDos: () =>
        set((state) => ({
          toDos: state.toDos.sort((a, b) => {
            if (a.checked === b.checked) {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }
            return Number(a.checked) - Number(b.checked);
          }),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);
