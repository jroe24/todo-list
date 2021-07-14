import React, { useState } from "react";
import TodoList from "./components/ToDoList.jsx";
import TodoForm from "./components/TodoForm.jsx";
import "./App.css";

function App() {
  const [checklist, setChecklist] = useState([]);
  
  return (
    <div className="App">
        {checklist.map((todo,idx) => (
        <TodoList
          todo={todo}
          setChecklist={setChecklist}
          index={idx}
          checklist={checklist}
        />
      ))}
    <TodoForm checklist={checklist} setChecklist={setChecklist} />
    </div>
  );
}

export default App;
