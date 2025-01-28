import { toast } from "sonner";

export default function useLocalStorage(key: string) {
  const setItem = (value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
      toast.error("Error setting item to local storage.");
    }
  };

  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(error);
      toast.error("Error getting item from local storage.");
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      toast.error("Error removing item from local storage.");
    }
  };
  return { setItem, getItem, removeItem };
}
