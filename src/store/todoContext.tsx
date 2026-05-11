import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { todoReducer } from "./todoReducer";
import { TodoStatus, Todo } from "../types/todo";
import { TODO_CONTEXT_KEYS } from "../constants/constants";
import { TodoStorage } from "../services/store";

interface TodoContextType {
  todos: Todo[];
  todoCount: number;
  todoTasks: Todo[];
  inProgressTasks: Todo[];
  doneTasks: Todo[];
  addTodo: (title: string) => Promise<void>;
  updateStatus: (id: number, newStatus: TodoStatus) => Promise<void>;
  removeCache: () => Promise<void>;
  loadTodos: () => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const loadTodos = useCallback(async () => {
    const cached = await TodoStorage.getTodos();
    if (cached && cached.length > 0) {
      dispatch({ type: TODO_CONTEXT_KEYS.INITIALIZE, payload: cached });
    }
  }, []);

  const addTodo = useCallback(
    async (title: string) => {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        status: TodoStatus.TODO,
      };
      dispatch({ type: TODO_CONTEXT_KEYS.ADD_TODO, payload: newTodo });
      await TodoStorage.saveTodos([...todos, newTodo]);
    },
    [todos],
  );

  const updateStatus = useCallback(
    async (id: number, newStatus: TodoStatus) => {
      const updated = todos.map((t: Todo) =>
        t.id === id ? { ...t, status: newStatus } : t,
      );
      dispatch({
        type: TODO_CONTEXT_KEYS.UPDATE_STATUS,
        payload: { id, newStatus },
      });
      await TodoStorage.saveTodos(updated);
    },
    [todos],
  );

  const removeCache = useCallback(async () => {
    await TodoStorage.removeCache();
    dispatch({ type: TODO_CONTEXT_KEYS.INITIALIZE, payload: [] });
  }, []);

  const todoCount = useMemo(
    () => todos.filter((t) => t.status !== TodoStatus.DONE).length,
    [todos],
  );

  const todoTasks = useMemo(
    () => todos.filter((t) => t.status === TodoStatus.TODO),
    [todos],
  );

  const inProgressTasks = useMemo(
    () => todos.filter((t) => t.status === TodoStatus.IN_PROGRESS),
    [todos],
  );

  const doneTasks = useMemo(
    () => todos.filter((t) => t.status === TodoStatus.DONE),
    [todos],
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        todoCount,
        todoTasks,
        inProgressTasks,
        doneTasks,
        addTodo,
        updateStatus,
        removeCache,
        loadTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo TodoProvider içinde kullanılmalıdır");
  }
  return context;
};
