import { useCallback, useState } from "react";

const useAsync = <T>(initialState: T) => {
  const [state, setState] = useState<{
    status: "idle" | "pending" | "fulfilled" | "rejected";
    data: T;
    error: any;
  }>({
    status: "idle",
    data: initialState,
    error: null,
  });

  const execute = useCallback((promise: Promise<T>) => {
    setState((cur) => ({
      ...cur,
      status: "pending",
      error: null,
    }));
    promise
      .then((res) =>
        setState((cur) => ({
          ...cur,
          status: "fulfilled",
          data: res,
        }))
      )
      .catch((e) =>
        setState((cur) => ({
          ...cur,
          status: "rejected",
          error: e,
        }))
      );
  }, []);

  const { data, status, error } = state;

  return { data, status, error, execute };
};

// TODO: useReducer를 사용하는 것이 더 나을수도..?(모든 상태를 하나의 객체로 관리하기 떄문)

export default useAsync;
