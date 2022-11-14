import axios, { AxiosResponse } from "axios";
import { HTTPErrorGenerator } from "../models/error";
import todo from "./todo";

const todoInstance = axios.create({ baseURL: "" });

todoInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(HTTPErrorGenerator(error))
);

const api = {
  todo: todo(todoInstance),
};

export default api;
