import { useState } from "react";
import "./App.css";

function App() {
  const [charcount, setCharcount] = useState(0);

  const charLength = (eve) => {
    setCharcount(eve.target.value.length);
  };

  const [preview, setPreview] = useState("");

  const handlepreview = (eve) => {
    console.log(eve.target.value.length);
    setPreview(eve.target.value);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="type something..."
          onChange={charLength}
        />
        <p>character count is : {charcount}</p>
        <div>
          <p>Live preview of Input: {preview}</p>
        </div>
      </div>
    </>
  );
}

export default App;
