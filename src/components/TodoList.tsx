// components/TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoModal from "./AddTodoModal";

const initialTodos = [
  { id: 1, content: "Task 1", checked: false },
  { id: 2, content: "Task 2", checked: false },
  { id: 3, content: "Task 3", checked: false },
];

type TTodoType = {
  id: number;
  content: string;
} | null;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodo, setEditingTodo] = useState<TTodoType>(null);
  const [isAddTodoModalOpen, setAddTodoModalOpen] = useState(false);

  const handleEditClick = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit as TTodoType);
  };

  const handleSaveEdit = (newContent: string) => {
    if (editingTodo) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, content: newContent } : todo
        )
      );
      setEditingTodo(null);
    }
  };

  const handleDelete = () => {
    if (editingTodo) {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== editingTodo.id)
      );
      setEditingTodo(null);
    }
  };

  const handleCloseEdit = () => {
    setEditingTodo(null);
  };

  const handleCheckToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleAddTodo = (newTodo: string) => {
    const newId = todos.length + 1;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: newId, content: newTodo, checked: false },
    ]);
  };

  const openAddTodoModal = () => {
    setAddTodoModalOpen(true);
  };

  const closeAddTodoModal = () => {
    setAddTodoModalOpen(false);
  };

  const checkedTodosCount = todos.filter((todo) => todo.checked).length;

  return (
    <div className="flex flex-col w-full">
      <div className="flex md:flex-row flex-col-reverse">
        <div className={editingTodo ? "md:w-1/2 p-4 pb-0" : "w-full p-4 pb-0"}>
          <h2 className="text-xl font-bold mb-4">Todo List</h2>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onEditClick={handleEditClick}
                isEditing={editingTodo?.id === todo.id}
                onSaveEdit={handleSaveEdit}
                onCheckToggle={handleCheckToggle}
              />
            ))}
          </ul>
          <div className="mt-4 flex w-full justify-between items-center">
            <p className="text-lg font-semibold">
              Checked Todos: {checkedTodosCount}
            </p>
            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={openAddTodoModal}
                className="bg-blue-500 rounded-full text-white p-2 px-3 flex  h-fit w-fit"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {editingTodo && (
          <aside className="md:w-1/2  md:border-l flex flex-col gap-6">
            <div className="bg-blue-400 w-full py-4  flex justify-center relative items-center">
              <h2 className="text-xl h-fit border font-bold  flex justify-between items-center">
                Edit Todo{" "}
              </h2>{" "}
              <button
                onClick={handleCloseEdit}
                className="border rounded-lg text-black border-black p-2 absolute right-5 text-sm"
              >
                close
              </button>
            </div>

            <div className="h-full">
              <h2 className="py-6">Task Name</h2>
              <input
                type="text"
                value={editingTodo.content}
                onChange={(e) =>
                  setEditingTodo((prev) =>
                    prev ? { ...prev, content: e.target.value } : null
                  )
                }
                className="w-full mb-4 p-2 border"
              />
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white p-2 rounded-lg px-6"
              >
                Delete
              </button>
              <button
                onClick={() => handleSaveEdit(editingTodo.content)}
                className="bg-blue-500 text-white p-2 rounded-lg w-full"
              >
                Save
              </button>
            </div>
          </aside>
        )}
      </div>

      {isAddTodoModalOpen && (
        <AddTodoModal onClose={closeAddTodoModal} onAddTodo={handleAddTodo} />
      )}
    </div>
  );
};

export default TodoList;
