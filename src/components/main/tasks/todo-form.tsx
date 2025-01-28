import { useRef } from "react";

import { todoType } from "../../../lib/types/todo-types";

import TextInput from "../../ui/inputs/text-input";
import FormButton from "../../ui/buttons/form-button";
import SelectInput from "../../ui/inputs/select-input";
import DateInput from "../../ui/inputs/date-input";
import PriorityInput from "../../ui/inputs/priority-input";
import TextareaInput from "../../ui/inputs/textArea-input";

type TodoFormProps = {
  onCreateTodo?: (newTodo: todoType) => void;
  onUpdateTodo?: (newTodo: todoType) => void;
  selectedTodoId?: string | undefined;
  modalType: "new" | "edit";
};

export default function TodoForm({
  onCreateTodo,
  onUpdateTodo,
  selectedTodoId,
  modalType,
}: TodoFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  // Formats the date for the datetime-local input
  const formatedTime = new Date().toISOString().slice(0, 16);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const userInput: todoType = {
        todoId: crypto.randomUUID(),
        todoCategory: formData.get("newTodoCategory") as string,
        todoTitle: formData.get("newTodoTitle") as string,
        todoNotes: formData.get("newTodoNotes") as string,
        todoDeadline: formData.get("newTodoDeadline") as string,
        todoPriority: formData.get("newTodoPriority") as
          | "low"
          | "medium"
          | "high",
      };

      // Appends the id of the task being edited
      if (selectedTodoId) {
        userInput.todoId = selectedTodoId;
      }

      // Only call onUpdateTodo if it exists
      if (onUpdateTodo) {
        onUpdateTodo(userInput);
      }

      // Only call onCreateTodo if it exists
      if (onCreateTodo) {
        onCreateTodo(userInput);
      }

      formRef.current?.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 px-3 pb-3 md:px-8 md:pb-8"
        ref={formRef}
      >
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr]">
          <div className="grid grid-rows-5 items-center gap-4">
            <label htmlFor="newTodoCategory">Todo Category</label>
            <label htmlFor="newTodoTitle">Todo Title</label>
            <label htmlFor="newTodoNotes">Todo Notes</label>
            <label htmlFor="newTodoDeadline">Todo Deadline</label>
            <label htmlFor="newTodoPriority">Todo Priority</label>
          </div>

          <div className="grid grid-rows-5 items-center gap-4">
            <SelectInput
              name={"newTodoCategory"}
              required={true}
              id={"newTodoCategory"}
            />
            <TextInput
              name={"newTodoTitle"}
              placeholder={"Todo title"}
              required={true}
              id={"newTodoTitle"}
            />

            <TextareaInput
              name={"newTodoNotes"}
              placeholder={"Todo notes"}
              required={false}
              id={"newTodoNotes"}
            />

            <DateInput
              name={"newTodoDeadline"}
              defaultValue={formatedTime}
              min={formatedTime}
              required={false}
              id={"newTodoDeadline"}
            />
            <PriorityInput
              name={"newTodoPriority"}
              required={false}
              id={"newTodoPriority"}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <FormButton formType={modalType} />
        </div>
      </form>
    </>
  );
}
