import Navbar2 from "./components/Navbar/Navbar2";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
// import { boxes } from "./data/boxes";
function App() {
  return (
    <div className="App">
      <Navbar2 />
      <ItemListContainer title={"Bienvenido"} />
    </div>
  );
}

export default App;
