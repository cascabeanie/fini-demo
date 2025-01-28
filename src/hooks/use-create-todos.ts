import { useCallback } from "react";
import { toast } from "sonner";
import useLocalStorage from "./use-local-storage";
import { useTodoContext } from "../contexts/todo-context";
import { useLoadingContext } from "../contexts/loading-context";
import { todoType } from "../lib/types/todo-types";

export default function useCreateTodos() {
  const { setTodos } = useTodoContext();
  const { setLoadingStatus } = useLoadingContext();
  const { setItem } = useLocalStorage("tasks");

  const createTodos = useCallback(
    (newTodo: todoType, onSuccess?: () => void) => {
      try {
        setLoadingStatus(true);

        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos, newTodo];
          setItem(updatedTodos);
          return updatedTodos;
        });

        toast.success("Task successfully created");
        onSuccess?.();
      } catch (error) {
        console.error(error);
        toast.error("An unexpected error occurred");
        return null;
      } finally {
        setLoadingStatus(false);
      }
    },
    [setTodos, setLoadingStatus],
  );

  return createTodos;
}
