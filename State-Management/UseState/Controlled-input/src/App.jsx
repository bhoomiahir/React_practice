import "./App.css";

function App() {
  const [charcount, setCharcount] = useState();

  return (
    <>
      <input type="text" placeholder="type something..." />
      <p>character count is : {charcount}</p>
    </>
  );
}

export default App;
