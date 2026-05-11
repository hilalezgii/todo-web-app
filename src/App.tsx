import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import { useTodo } from "./store/todoContext";
import TodoList from "./components/TodoList";

export default function App() {
  const { loadTodos, todoTasks, inProgressTasks, doneTasks, addTodo } =
    useTodo();

  const todoCount =
    todoTasks.length + inProgressTasks.length + doneTasks.length;

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className="min-h-screen bg-[#0F172A] text-white font-sans"
    >
      <div className="p-6 md:p-12 max-w-2xl mx-auto flex flex-col">
        <Header todoCount={todoCount} />
        <CreateTodo createTodo={addTodo} />
        <TodoList />
      </div>
    </div>
  );
}
