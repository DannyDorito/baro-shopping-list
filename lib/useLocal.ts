import { useState } from "react";
import { toast } from "sonner";

export const useLocal = (key: string, initialValue: unknown) => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      toast(error as string);
    }
  });

  const setValue = (value: unknown) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      toast(error as string);
    }
  };

  return [state, setValue];
};
