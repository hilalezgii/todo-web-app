import React from "react";
import {
  Todo,
  TodoStatus,
  TodoStatusLabel,
  TitleColor,
} from "../../types/todo";
import ActionButton from "../Button/ActionButton";

interface TodoSectionProps {
  title: string;
  list: Todo[];
  titleColor: TitleColor;
  nextStatus?: TodoStatus;
  prevStatus?: TodoStatus;
  updateStatus: (id: number, newStatus: TodoStatus) => Promise<void>;
}

const TodoSection: React.FC<TodoSectionProps> = ({
  title,
  list,
  titleColor,
  nextStatus,
  prevStatus,
  updateStatus,
}) => (
  <div className="mb-10">
    <h3
      className={`text-[11px] font-black mb-4 uppercase tracking-[0.15em] ${titleColor}`}
    >
      {title} ({list.length})
    </h3>
    <div className="space-y-3">
      {list.map((todo) => (
        <div
          key={todo.id}
          className="bg-[#1E293B] rounded-xl p-5 border-l-[3px] border-blue-500/40 transition-all hover:bg-[#243147]"
        >
          <p
            className={`text-[15px] font-semibold mb-4 ${
              todo.status === TodoStatus.DONE
                ? "line-through text-gray-500"
                : "text-gray-200"
            }`}
          >
            {todo.title}
          </p>
          <div className="flex gap-6">
            {prevStatus !== undefined && (
              <ActionButton
                label="GERİ AL"
                onClick={() => updateStatus(todo.id, prevStatus)}
              />
            )}
            {nextStatus !== undefined && (
              <ActionButton
                label={TodoStatusLabel[todo.status]}
                onClick={() => updateStatus(todo.id, nextStatus)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TodoSection;
