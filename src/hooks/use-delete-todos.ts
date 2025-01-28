import { useCallback } from "react";
import { toast } from "sonner";

import { useTodoContext } from "../contexts/todo-context";
import { useLoadingContext } from "../contexts/loading-context";
import useLocalStorage from "./use-local-storage";

export default function useDeleteTodos() {
  const { setTodos } = useTodoContext();
  const { setLoadingStatus } = useLoadingContext();
  const { setItem } = useLocalStorage("tasks");

  const deleteTodos = useCallback(
    (todoId: string | undefined) => {
      try {
        setLoadingStatus(true);

        setTodos((prevTodos) => {
          const filteredTodos = prevTodos.filter((todo) => {
            return todo.todoId !== todoId;
          });

          const updatedTodos = [...filteredTodos];
          setItem(updatedTodos);
          return updatedTodos;
        });

        toast.success("Task successfully deleted");
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

  return deleteTodos;
}
