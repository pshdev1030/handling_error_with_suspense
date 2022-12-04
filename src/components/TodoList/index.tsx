<<<<<<< Updated upstream
=======
import { error } from "console";
import { atom, useAtom } from "jotai";
import { Suspense, useEffect } from "react";
import useAsync from "../../hooks/useAsync";
>>>>>>> Stashed changes
import { TodoItemModel } from "../../models";
interface TodoListProps {
  todoList: TodoItemModel[];
}

<<<<<<< Updated upstream
const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem todoItem={item} key={item.id} />
      ))}
    </ul>
=======
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
>>>>>>> Stashed changes
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
