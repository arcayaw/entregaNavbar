import Navbar2 from "./components/Navbar/Navbar2";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar2 />
      <ItemListContainer title={"Bienvenido"} />
    </Container>
  );
}

export default App;
