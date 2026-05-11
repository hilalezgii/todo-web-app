import { TODO_CONTEXT_KEYS } from "../constants/constants";
import { Todo, TodoStatus } from "../types/todo";

export type todoAction =
  | { type: typeof TODO_CONTEXT_KEYS.ADD_TODO; payload: Todo }
  | {
      type: typeof TODO_CONTEXT_KEYS.UPDATE_STATUS;
      payload: { id: number; newStatus: TodoStatus };
    }
  | { type: typeof TODO_CONTEXT_KEYS.INITIALIZE; payload: Todo[] };

export const todoReducer = (state: Todo[], action: todoAction): Todo[] => {
  switch (action.type) {
    case TODO_CONTEXT_KEYS.INITIALIZE:
      return action.payload;
    case TODO_CONTEXT_KEYS.ADD_TODO:
      return [...state, action.payload];
    case TODO_CONTEXT_KEYS.UPDATE_STATUS:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.newStatus }
          : todo,
      );
    default:
      return state;
  }
};
