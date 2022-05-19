import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    producto
      .then((res) => setProducto(res))
      .then((error) => console.log(error))
      .finally(() => setCargando(false));
    // eslint-disable-next-line
  }, [id, setCargando]);

  console.log(setProducto);

  return (
    <>
      {cargando ? (
        <p>Cargando... </p>
      ) : (
        producto && <ItemDetail producto={producto} initial={1} />
      )}
    </>
  );
}
