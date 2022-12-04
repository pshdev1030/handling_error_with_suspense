import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import useAsync from "./hooks/useAsync";
import { TodoItemModel, UserNameModel } from "./models";
import { NotFoundError, UnauthorizedError } from "./models/error";
import api from "./services";

function App() {
  const { status, data, error, execute } = useAsync<UserNameModel>({
    userName: "",
  });

  useEffect(() => {
    execute(api.todo.getUserName());
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
    return <div>error</div>;
  }

  return (
    <>
      <>username: {data?.userName}</>
      <TodoList userName={data.userName} />
    </>
  );
}

export default App;
//TODO: javascript 지원
