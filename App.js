import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Components/Todolist";
import Marque from "./Components/Marque";

function App() {
  return (
    <div className="App">
      <Todolist />
      <Marque />
    </div>
  );
}

export default App;
