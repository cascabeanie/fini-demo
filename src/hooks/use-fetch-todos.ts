import { useCallback } from "react";
import { toast } from "sonner";
import useLocalStorage from "./use-local-storage";
import { useTodoContext } from "../contexts/todo-context";
import { useLoadingContext } from "../contexts/loading-context";

export default function useFetchTodos() {
  const { getItem } = useLocalStorage("tasks");
  const { setTodos } = useTodoContext();
  const { setLoadingStatus } = useLoadingContext();

  const fetchTodos = useCallback(() => {
    try {
      setLoadingStatus(true);

      const data = getItem();

      if (!data) {
        return [];
      }

      setTodos(() => {
        return [...data];
      });
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
      return [];
    } finally {
      setLoadingStatus(false);
    }
  }, [setTodos, setLoadingStatus]);

  return fetchTodos;
}
