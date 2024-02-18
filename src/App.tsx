// App.tsx
import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const userDetails = {
    username: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className=" mx-auto p-4 max-w-7xl min-h-screen flex justify-center items-center flex-col">
      <div className="mb-4 w-full">
        <h1 className="text-2xl font-bold">User Details</h1>
        <p>{userDetails.username}</p>
        <p>{userDetails.email}</p>
      </div>

      <TodoList />
    </div>
  );
};

export default App;
