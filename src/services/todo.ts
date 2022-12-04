import { AxiosInstance, AxiosResponse } from "axios";
import {
  TodoItemModel,
  TodoItemInterface,
  UserNameInterface,
  UserNameModel,
} from "../models";

const todo = (instance: AxiosInstance) => ({
  getUserName: () =>
    instance
      .get("/username")
      .then(
        (res: AxiosResponse<UserNameInterface>) => new UserNameModel(res.data)
      ),
  getTodoList: (userName: string, passWord: string) =>
    instance
      .post("/todos", { userName, passWord })
      .then((res: AxiosResponse<TodoItemInterface[]>) =>
        res.data.map((todo) => new TodoItemModel(todo))
      ),
});

export default todo;
