import { useCallback } from "react";
import { toast } from "sonner";

import { useTodoContext } from "../contexts/todo-context";
import { todoType } from "../lib/types/todo-types";
import useLocalStorage from "./use-local-storage";

export default function useCompleteTodos() {
  const { setTodos } = useTodoContext();
  const { setItem } = useLocalStorage("tasks");

  const completeTodos = useCallback(
    (todo: todoType) => {
      try {
        const { todoId, todoCompleted } = todo;

        setTodos((prevTodos) => {
          const filteredTodos = prevTodos.filter((todo) => {
            return todo.todoId !== todoId;
          });

          let newCompletedStatus;
          todoCompleted === false
            ? (newCompletedStatus = true)
            : (newCompletedStatus = false);
          todo.todoCompleted = newCompletedStatus;

          const updatedTodos = [...filteredTodos, todo];
          setItem(updatedTodos);
          return updatedTodos;
        });

        toast.success("Completed status successfully updated");
      } catch (error) {
        console.error(error);
        toast.error("An unexpected error occurred");
        return null;
      }
    },
    [setTodos],
  );

  return completeTodos;
}
