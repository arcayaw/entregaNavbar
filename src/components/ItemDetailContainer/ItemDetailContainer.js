import {} from "react-bootstrap";
import { useState, useEffect } from "react";
import { boxes } from "../../data/boxes";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [boxDetail, setboxDetail] = useState([]);
  const [cargando, setCargando] = useState(false);
  const getBox = new Promise((resolve, reject) => {
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
    getBox
      .then((res) => setboxDetail(res))
      .then((error) => console.log(error))
      .finally(() => setCargando(false));
    // eslint-disable-next-line
  }, []);

  console.log(boxDetail);

  return (
    <>
      {cargando ? (
        <p>Cargando... </p>
      ) : (
        <ItemDetail boxDetail={boxDetail} initial={1} />
      )}
    </>
  );
}
