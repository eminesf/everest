import api from "@/api/axios";
import { useToDoStore } from "@/store/store";
import { Todos } from "@/types/to-do";
import { useEffect } from "react";

const useFetchTodoApiList = () => {
  const { toDos: todos, setToDos: setTodos } = useToDoStore();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.get<Todos>("/input.json");
        const rawTodos = response.data.todos;

        const idSet = new Set();
        const processedTodos = rawTodos.map((todo) => {
          let id = todo.id;

          if (!id || idSet.has(id)) {
            id = crypto.randomUUID();
          }
          idSet.add(id);

          const content =
            typeof todo.content === "object" && "title" in todo.content
              ? (todo.content as { title: string }).title
              : todo.content;

          const checked =
            typeof todo.checked === "number"
              ? todo.checked === 1
              : todo.checked;

          const createdAt = new Date().toISOString();

          return { ...todo, id, content, checked, createdAt };
        });

        const sortedTodos = processedTodos.sort(
          (a, b) => Number(a.checked) - Number(b.checked)
        );

        setTodos(sortedTodos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    if (todos.length === 0) {
      fetchTodos();
    }
  }, [todos, setTodos]);

  return null;
};

export { useFetchTodoApiList };
