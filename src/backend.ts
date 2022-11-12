import { createServer, Response } from "miragejs";
import uuid from "uuidjs";

const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const arr = [
  {
    id: uuid.generate(),
    title: "title1",
    description: "description1",
    isImportant: true,
  },
  {
    id: uuid.generate(),
    title: "title2",
    description: "description2",
    isImportant: true,
  },
  {
    id: uuid.generate(),
    title: "title3",
    description: "description3",
    isImportant: true,
  },
  {
    id: uuid.generate(),
    title: "title4",
    description: "description5",
    isImportant: true,
  },
  {
    id: uuid.generate(),
    title: "title6",
    description: "description6",
    isImportant: true,
  },
];

const db: { [key: string]: any } = { sunghyeon: arr };

createServer({
  routes() {
    this.post("/todos", async (schema, req) => {
      const { userName } = JSON.parse(req.requestBody);

      await wait(1000);

      if (!db[userName]) {
        return new Response(404, {}, { message: "Invalid Username" });
      }

      return new Response(200, {}, db[userName]);
    });
  },
});
