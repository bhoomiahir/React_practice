import AppName from "./Component/AppName";
import Addtodo from "./Component/Addtodo";
import Todoitems from "./Component/Todoitem";
import Todoitem from "./Component/Todoitems";
import { useState } from "react";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "go to college",
      date: "15-07-26",
    },
    {
      name: "go to gym",
      date: "15-07-26",
    },
  ];

  return (
    <div className="container">
      <AppName className="margin" />
      <Addtodo className="margin" />
      <Todoitem />
      <Todoitems className="margin" todoItems={todoItems} />
    </div>
  );
}

export default App;
