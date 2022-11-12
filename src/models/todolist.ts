interface TodoItemInterface {
  id: string;
  title: number;
  description: number;
  isImportant: boolean;
}

class TodoItem {
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

export { TodoItem };
export type { TodoItemInterface };
