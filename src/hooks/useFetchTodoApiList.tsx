import api from "@/api/axios";
import { useToDoStore } from "@/store/store";
import { Todos } from "@/types/to-do";
import { formatDateToAMPM } from "@/util/formatDateToAMPM";
import { v4 as uuidv4 } from "uuid";

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
            id = uuidv4();
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

          const createdAt = formatDateToAMPM(new Date());
          const finishedAt = formatDateToAMPM(new Date());

          return { ...todo, id, content, checked, createdAt, finishedAt };
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
