// App.tsx
import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
 

  return (
    <div className=" mx-auto p-4 max-w-7xl min-h-screen flex justify-center items-center flex-col">
      

      <TodoList />
    </div>
  );
};

export default App;
