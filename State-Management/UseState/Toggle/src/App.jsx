import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  let btn = toggle ? "Show" : "Hide";
  let type = toggle ? "password" : "text";

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(!toggle);
  };

  return (
    <div>
      <input type={type} placeholder="enter password" />
      <button onClick={handleToggle}>{btn}</button>
    </div>
  );
}

export default App;
