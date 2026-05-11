import React from "react";
import "tailwindcss";
type HeaderProps = {
  todoCount: number;
};

const Header = ({ todoCount }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-xl font-extrabold text-orange-500 tracking-tighter">
        TODO APP
      </h1>
      <span className="text-xl font-bold text-orange-500">{todoCount}</span>
    </div>
  );
};

export default Header;
