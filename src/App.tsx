import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { TodoItemModel } from "./models";
import { NotFoundError, UnauthorizedError } from "./models/error";
import api from "./services";

function App() {
  const [todoList, setTodoList] = useState<{
    status: "idle" | "pending" | "fulfilled" | "rejected";
    data: TodoItemModel[];
    error: any;
  }>({
    status: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    async function getInitialData() {
      try {
        setTodoList((cur) => ({
          ...cur,
          status: "pending",
          error: null,
        }));
        const data = await api.todo.getTodoList("sunghyeon", "password");
        setTodoList((cur) => ({
          ...cur,
          status: "fulfilled",
          data: data,
        }));
      } catch (e: any) {
        setTodoList((cur) => ({
          ...cur,
          status: "rejected",
          error: e,
        }));
      }
    }
    getInitialData();
  }, []);

  const { status, data, error } = todoList;

  if (status === "pending") {
    return <div>loading</div>;
  }

  if (status === "rejected") {
    if (error instanceof NotFoundError) {
      error.handler();
      return <div>Not Found {error.message}</div>;
    }
    if (error instanceof UnauthorizedError) {
      error.handler();
      return <div>Unauthorized :{error.message}</div>;
    }
    return <div>error</div>;
  }

  return <TodoList todoList={data} />;
}

export default App;
