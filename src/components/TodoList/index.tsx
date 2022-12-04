import { useEffect } from "react";
import useAsync from "../../hooks/useAsync";
import { TodoItemModel } from "../../models";
import { NotFoundError, UnauthorizedError } from "../../models/error";
import api from "../../services";
interface TodoListProps {
  userName: string;
}

const TodoList = ({ userName }: TodoListProps) => {
  const { status, data, error, execute } = useAsync<TodoItemModel[] | null>(
    null
  );

  useEffect(() => {
    execute(api.todo.getTodoList(userName, "password"));
  }, [userName]);

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
    <ul>
      {data?.map((item) => (
        <TodoItem todoItem={item} key={item.id} />
      ))}
    </ul>
  );
};

interface TodoItemProps {
  todoItem: TodoItemModel;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <li>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>제목 : {todoItem.title}</div>
        <div>설명 : {todoItem.description}</div>
        {todoItem.isImportant && <div>❗️</div>}
      </div>
    </li>
  );
};
export default TodoList;
