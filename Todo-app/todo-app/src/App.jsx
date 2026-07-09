import AppName from "./Component/AppName";
import Mainrow from "./Component/Addtodo";
import Todoitem from "./Component/Todoitem";
import "./App.css";

function App() {
  return (
    <div className="container">
      <AppName className="margin" />
      <Mainrow className="margin" />
      <Todoitem className="margin" />
    </div>
  );
}

export default App;
