import { TodoItemModel } from "../../models";
interface TodoListProps {
  todoList: TodoItemModel[];
}

const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <ul>
      {todoList.map((item) => (
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
