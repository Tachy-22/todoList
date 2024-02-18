// components/TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoModal from "./AddTodoModal";
import EditTodoAside from "./EditTodoAside";

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
  const userDetails = {
    username: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="flex flex-col w-full bg-gray-100">
      <div className="flex md:flex-row flex-col-reverse">
        <div className={editingTodo ? "md:w-1/2 pb-6" : "w-full p-4 "}>
          <div className="mb-4 w-full flex items-center p-3 gap-2 bg-blue-600 text-white">
            <img
              src="https://github.com/shadcn.png"
              alt=""
              className=" w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p> Hello. {userDetails.username}</p>
              <p className=" text-2xl font-light italic">
                What are your plans for today?
              </p>
            </div>
          </div>
          <ul className="px-2 flex flex-col gap-4">
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
          <div className="mt-4 flex w-full justify-between items-center px-3">
            <p className="text-lg font-semibold">
              Checked Todos: {checkedTodosCount}
            </p>
            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={openAddTodoModal}
                className="bg-blue-500 rounded-full text-white p-2  flex  h-[4rem] w-[4rem] text-5xl scale-[60%] font-bold text-center mx-auto relative hover:brightness-[80%]"
              >
                <p className="mx-auto text-center h-fit  absolute top-[0.2rem] right-[0.95rem]">
                  +
                </p>
              </button>
            </div>
          </div>
        </div>

        {editingTodo && (
          <EditTodoAside
            editingTodo={editingTodo}
            onClose={handleCloseEdit}
            onDelete={handleDelete}
            onSaveEdit={handleSaveEdit}
          />
        )}
      </div>

      {isAddTodoModalOpen && (
        <AddTodoModal onClose={closeAddTodoModal} onAddTodo={handleAddTodo} />
      )}
    </div>
  );
};

export default TodoList;
