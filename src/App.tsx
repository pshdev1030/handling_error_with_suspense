import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { TodoItemModel } from "./models";
import api from "./services";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState<TodoItemModel[]>([]);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    async function getInitialData() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.todo.getTodoList("sunghyeon");
        setTodoList(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    }
    getInitialData();
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>something wrong</div>;
  }

  return <TodoList todoList={todoList} />;
}

export default App;
