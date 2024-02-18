// components/EditTodoAside.tsx
import React, { useState } from "react";

interface EditTodoAsideProps {
  editingTodo: { id: number; content: string } | null;
  onClose: () => void;
  onDelete: () => void;
  onSaveEdit: (newContent: string) => void;
}

const EditTodoAside: React.FC<EditTodoAsideProps> = ({
  editingTodo,
  onClose,
  onDelete,
  onSaveEdit,
}) => {
  const [editedContent, setEditedContent] = useState(
    editingTodo?.content || ""
  );

  const handleSaveEdit = () => {
    onSaveEdit(editedContent);
  };

  return (
    <aside className="md:w-1/2  md:border-l flex flex-col gap-6 pb-6">
      <div className="bg-blue-600 w-full py-[1.7rem] text-white  flex justify-center relative items-center">
        <h2 className="text-xl h-fit  font-bold  flex justify-between items-center">
          Edit Todo
        </h2>
        <button
          onClick={onClose}
          className="border rounded-lg border-white p-2 absolute right-5 text-sm hover:brightness-[80%]"
        >
          Close
        </button>
      </div>

      <div className="h-full px-6 pb-2">
        <h2 className="py-4 text-sm">Task Name</h2>
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-2 rounded-lg px-6 hover:brightness-[80%]"
        >
          Delete
        </button>
        <button
          onClick={handleSaveEdit}
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:brightness-[80%]"
        >
          Save
        </button>
      </div>
    </aside>
  );
};

export default EditTodoAside;
