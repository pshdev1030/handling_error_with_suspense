import { atom, useAtom } from "jotai";
import { Suspense } from "react";
import { TodoItemModel } from "../../models";
import api from "../../services";

interface TodoListProps {
  userName: string;
}

const asyncTodoListAtom = atom(
  async (get) => await api.todo.getTodoList("sunghyeon", "password")
);

const TodoList = ({ userName }: TodoListProps) => {
  const [data] = useAtom(asyncTodoListAtom);

  return (
    <Suspense fallback={<div>loading</div>}>
      <ul>
        {data?.map((item) => (
          <TodoItem todoItem={item} key={item.id} />
        ))}
      </ul>
    </Suspense>
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
