import { AxiosInstance, AxiosResponse } from "axios";
import { TodoItemModel, TodoItemInterface } from "../models";

const todo = (instance: AxiosInstance) => ({
  getTodoList: (userName: string) =>
    instance
      .post("/todos", { userName })
      .then((res: AxiosResponse<TodoItemInterface[]>) =>
        res.data.map((todo) => new TodoItemModel(todo))
      ),
});

export default todo;
