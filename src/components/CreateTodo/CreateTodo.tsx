import React, { useState } from "react";
import { useTodo } from "../../store/todoContext";
import "tailwindcss";

type CreateTodoProps = {
  createTodo: (text: string) => void;
};

const CreateTodo = ({ createTodo }: CreateTodoProps) => {
  const [text, setText] = useState("");
  const [task, setTask] = useState("");
  const { addTodo } = useTodo();

  const onCreateTodo = () => {
    if (text.trim().length > 0) {
      createTodo(text);
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCreateTodo();
    }
  };
  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="space-y-4 mb-12">
      <input
        type="text"
        className="w-full bg-[#1E293B] border border-gray-700 rounded-md px-4 py-3 text-sm text-gray-300 placeholder:text-gray-500 outline-none focus:border-orange-500 transition-all"
        placeholder="Yapılacaklar"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-md transition-all uppercase tracking-[0.2em] text-xs shadow-lg shadow-orange-900/20 active:scale-[0.99]"
      >
        KAYDET
      </button>
    </div>
  );
};

export default CreateTodo;
