export type ToDo = {
  id: number | string;
  content: string;
  checked: boolean;
  createdAt: string;
  finishedAt?: string;
};

export type Todos = {
  todos: ToDo[];
};

export type RadioObjType = {
  filterOption: "all" | "toDo" | "done";
};
