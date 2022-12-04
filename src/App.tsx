import { atom, useAtom } from "jotai";
import { Suspense } from "react";
import TodoList from "./components/TodoList";
<<<<<<< Updated upstream
import useAsync from "./hooks/useAsync";
import { TodoItemModel, UserNameModel } from "./models";
import { NotFoundError, UnauthorizedError } from "./models/error";
import api from "./services";

function App() {
  const { status, data, error, execute } = useAsync<UserNameModel | null>(null);
=======
>>>>>>> Stashed changes

import api from "./services";

const userNameAtom = atom(async (get) => await api.todo.getUserName());

function App() {
  const [data] = useAtom(userNameAtom);

<<<<<<< Updated upstream
  return <>{data?.userName}</>;
=======
  return (
    <>
      <Suspense fallback={<div>유저 이름을 불러오는중</div>}>
        <>username: {data?.userName}</>
        <TodoList userName={data.userName} />
      </Suspense>
    </>
  );
>>>>>>> Stashed changes
}

export default App;
//TODO: javascript 지원
//TODO: errorboundary
//TODO: without jotai
//TODO: with params
