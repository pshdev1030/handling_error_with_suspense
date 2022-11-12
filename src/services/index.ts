import axios from "axios";
import todo from "./todo";

const todoInstance = axios.create({ baseURL: "" });

const api = {
  todo: todo(todoInstance),
};

export default api;
