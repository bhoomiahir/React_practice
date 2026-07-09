import AppName from "./Component/AppName";
import Mainrow from "./Component/Addtodo";
import Todoitem from "./Component/Todoitem";
import "./App.css";

function App() {
  return (
    <center>
      <AppName class="margin" style={{ marginBottom: "30px" }}></AppName>
      <Mainrow class="margin"></Mainrow>
      <Todoitem class="margin"></Todoitem>
    </center>
  );
}

export default App;
