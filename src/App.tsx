import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import useAsync from "./hooks/useAsync";
import { TodoItemModel } from "./models";
import { NotFoundError, UnauthorizedError } from "./models/error";
import api from "./services";

function App() {
  const { status, data, error, execute } = useAsync<TodoItemModel[]>([]);

  useEffect(() => {
    execute(api.todo.getTodoList("sunghyeon", "password"));
  }, []);

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
  }

  return (
    <>
      <TodoList todoList={data} />
    </>
  );
}

export default App;
//TODO: javascript 지원
