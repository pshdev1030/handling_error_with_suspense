import { isConstructorDeclaration } from "typescript";

interface TodoItemInterface {
  id: string;
  title: number;
  description: number;
  isImportant: boolean;
}

class TodoItemModel {
  id: string;
  title: number;
  description: number;
  isImportant: boolean;
  constructor({ id, title, description, isImportant }: TodoItemInterface) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isImportant = isImportant;
  }
}

interface UserNameInterface {
  username: string;
}

class UserNameModel {
  userName: string;
  constructor({ username }: UserNameInterface) {
    this.userName = username;
  }
}

export { TodoItemModel, UserNameModel };
export type { TodoItemInterface, UserNameInterface };
