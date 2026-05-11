import React from "react";
import { useTodo } from "../../store/todoContext";
import { TodoStatus, SectionTitles, TitleColor } from "../../types/todo";
import TodoSection from "./TodoSection";

const TodoList: React.FC = () => {
  const { todoTasks, inProgressTasks, doneTasks, updateStatus } = useTodo();

  return (
    <div className="pb-20">
      <TodoSection
        title={SectionTitles.TODO}
        list={todoTasks}
        titleColor={TitleColor.TODO}
        nextStatus={TodoStatus.IN_PROGRESS}
        updateStatus={updateStatus}
      />
      <TodoSection
        title={SectionTitles.IN_PROGRESS}
        list={inProgressTasks}
        titleColor={TitleColor.IN_PROGRESS}
        nextStatus={TodoStatus.DONE}
        prevStatus={TodoStatus.TODO}
        updateStatus={updateStatus}
      />
      <TodoSection
        title={SectionTitles.DONE}
        list={doneTasks}
        titleColor={TitleColor.DONE}
        updateStatus={updateStatus}
      />
    </div>
  );
};

export default TodoList;
