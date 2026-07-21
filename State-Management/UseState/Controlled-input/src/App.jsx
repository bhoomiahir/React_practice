import { useState } from "react";
import "./App.css";

function App() {
  const [preview, setPreview] = useState("");

  const handleinput = (eve) => {
    setPreview(eve.target.value);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="type something..."
          onChange={handleinput}
        />
        <p>character count is : {preview.length}</p>
        <div>
          <p>Live preview of Input: {preview}</p>
        </div>
      </div>
    </>
  );
}

export default App;
