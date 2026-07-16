import "./App.css";
import Profilecard from "./Component/ProfileCard";

function App() {
  const profile = {
    name: "Tachibana Hinata",
    role: "girlfriend of Takemichi",
    avatar:
      "https://i.pinimg.com/736x/e7/87/41/e7874123ba5b80d01e6bc1e58e545d3e.jpg",
  };

  return <Profilecard profile={profile} />;
}

export default App;
