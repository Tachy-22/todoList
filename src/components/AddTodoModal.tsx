// components/AddTodoModal.tsx
import React, { useState } from "react";

interface AddTodoModalProps {
  onClose: () => void;
  onAddTodo: (newTodo: string) => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ onClose, onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 w-96 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo..."
          className="w-full p-2 border mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddTodo}
            className="bg-green-500 text-white p-2 rounded-lg"
          >
            Add Todo
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 ml-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
