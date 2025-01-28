import { useCallback } from "react";
import { toast } from "sonner";
import useLocalStorage from "./use-local-storage";
import { useTodoContext } from "../contexts/todo-context";
import { useLoadingContext } from "../contexts/loading-context";
import { todoType } from "../lib/types/todo-types";

export default function useUpdateTodos() {
  const { setTodos } = useTodoContext();
  const { setLoadingStatus } = useLoadingContext();
  const { setItem } = useLocalStorage("tasks");

  const updateTodos = useCallback(
    (newTodo: todoType, onSuccess?: () => void) => {
      try {
        setLoadingStatus(true);
        const { todoId } = newTodo;

        setTodos((prevTodos) => {
          const filteredTodos = prevTodos.filter((todo) => {
            return todo.todoId !== todoId;
          });

          const updatedTodos = [...filteredTodos, newTodo];
          setItem(updatedTodos);
          return updatedTodos;
        });

        toast.success("Task successfully updated");
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

  return updateTodos;
}
