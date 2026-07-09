import "./App.css";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);

  return (
    <div className="Container">
      <h1>Counter</h1>
      <p>Count is : {Count}</p>
      <button>increase</button>
      <button>decrease</button>
    </div>
  );
}

export default App;
