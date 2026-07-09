import "./App.css";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);

  function increaseCount() {
    setCount(Count + 1);
  }

  function decreaseCount() {
    setCount(Count - 1);
  }

  return (
    <div className="Container">
      <h1>Counter</h1>
      <p>Count is : {Count}</p>
      <button className="btn" value="increase" onClick={increaseCount}>
        increase
      </button>
      <button className="btn" value="decrease" onClick={decreaseCount}>
        decrease
      </button>
    </div>
  );
}

export default App;
