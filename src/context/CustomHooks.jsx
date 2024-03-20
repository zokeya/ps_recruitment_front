import { useStateContext } from "./ContextProvider";

export function useCustomHook() {
  const { user, token, setUser, setToken } = useStateContext();

  // Your custom hook logic here

  return { user, token, setUser, setToken };
}
