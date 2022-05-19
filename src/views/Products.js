import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar/Navbar2";
export default function Productos() {
  return (
    <div className="App">
      <Navbar2 />
      <h1>Visita nuestra tienda</h1>
      <p>Disfruta de todas las promociones que tenemos para vos</p>
      <ItemListContainer title="Nuestros productos" />

      <Footer />
    </div>
  );
}
