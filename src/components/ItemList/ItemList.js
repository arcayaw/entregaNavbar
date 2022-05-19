import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { boxes } from "../../data/boxes";
import Item from "../Item/Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { categoryID } = useParams();

  const getBoxes = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(boxes);
      } else {
        reject("salio mal");
      }
    }, 2000);
  });

  useEffect(() => {
    setCargando(true);
    getBoxes
      .then((res) => setProductos(res))
      .then((error) => console.log(error))
      .finally(() => setCargando(false));
    // eslint-disable-next-line
  }, [categoryID, setCargando]);

  return (
    <>
      {cargando ? (
        <p>Cargando... </p>
      ) : (
        productos.map((producto) => <Item {...producto} key={producto.id} />)
      )}
      <div></div>
    </>
  );
};
//meeter clases aca para hacer el el estilo dedel cart list
//elimianar el cargando cuando mande a produccion.

export default ItemList;
