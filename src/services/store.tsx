import { Preferences } from "@capacitor/preferences";
import { Todo } from "../types/todo";
import { STORAGE_KEYS } from "../constants/constants";

export const TodoStorage = {
  getTodos: async (): Promise<Todo[]> => {
    try {
      const { value } = await Preferences.get({ key: STORAGE_KEYS.TODO_LIST });
      return value ? JSON.parse(value) : [];
    } catch (error) {
      console.error("okuma hatası:", error);
      return [];
    }
  },

  saveTodos: async (todos: Todo[]): Promise<void> => {
    try {
      await Preferences.set({
        key: STORAGE_KEYS.TODO_LIST,
        value: JSON.stringify(todos),
      });
    } catch (error) {
      console.error("yazma hatası:", error);
    }
  },
  removeCache: async (): Promise<void> => {
    try {
      await Preferences.remove({ key: STORAGE_KEYS.TODO_LIST });
    } catch (error) {
      console.error("silme hatası:", error);
    }
  },
};
