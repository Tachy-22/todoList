// components/TodoItem.tsx
import React from "react";

interface TodoItemProps {
  todo: { id: number; content: string; checked: boolean };
  onEditClick: (id: number) => void;
  isEditing: boolean;
  onSaveEdit: (newContent: string) => void;
  onCheckToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEditClick,
  onCheckToggle,
}) => {
  return (
    <li className="flex items-center mb-2 shadow-xl rounded-md p-3 bg-white">
      <button
        onClick={() => onCheckToggle(todo.id)}
        className={`border border-gray-400 w-6 h-6 relative aspect-square rounded-full  focus:outline-none p-3 ${
          todo.checked ? "bg-green-500 text-white" : ""
        }`}
      >
        <span className="absolute top-0 left-[0.25rem] text-black font-extrabold ">
          {" "}
          {todo.checked && "✓"}
        </span>
      </button>
      <span
        className={`flex-grow pl-2 ${
          todo.checked ? "line-through text-gray-400 decoration-gray-400" : ""
        }`}
      >
        {todo.content}
      </span>
      <button
        onClick={() => onEditClick(todo.id)}
        className="border hover:backdrop-brightness-[90%] border-blue-900 text-blue-900  p-2 rounded-lg    "
      >
        Edit
      </button>
    </li>
  );
};

export default TodoItem;
