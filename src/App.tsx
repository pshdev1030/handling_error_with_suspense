import { atom, useAtom } from "jotai";
import { Suspense } from "react";
import TodoList from "./components/TodoList";
import api from "./services";

const userNameAtom = atom(async (get) => await api.todo.getUserName());

function App() {
  const [data] = useAtom(userNameAtom);

  return (
    <>
      <Suspense fallback={<div>유저 이름을 불러오는중</div>}>
        <>username: {data?.userName}</>
        <TodoList userName={data.userName} />
      </Suspense>
    </>
  );
}

export default App;
//TODO: javascript 지원
//TODO: errorboundary
//TODO: without jotai
//TODO: with params
