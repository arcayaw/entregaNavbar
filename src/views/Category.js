import Navbar2 from "../components/Navbar/Navbar2";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div>
      <Navbar2 />
      <h1>Listado de productos</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}
