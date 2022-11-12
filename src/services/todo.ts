import { AxiosInstance, AxiosResponse } from "axios";
import { TodoItem, TodoItemInterface } from "../models";

const todo = (instance: AxiosInstance) => ({
  getTodoList: (userName: string) =>
    instance
      .post("/todos", { userName })
      .then((res: AxiosResponse<TodoItemInterface[]>) =>
        res.data.map((todo) => new TodoItem(todo))
      ),
});

export default todo;
