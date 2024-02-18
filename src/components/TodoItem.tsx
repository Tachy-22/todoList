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
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onCheckToggle(todo.id)}
        className="mr-2"
      />
      <span className={`flex-grow ${todo.checked ? "line-through" : ""}`}>
        {todo.content}
      </span>
      <button
        onClick={() => onEditClick(todo.id)}
        className="border border-blue-900 text-blue-900  p-2 rounded-lg"
      >
        Edit
      </button>
    </li>
  );
};

export default TodoItem;
