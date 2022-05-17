import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { boxes } from "../../data/boxes";

export default function ItemListContainer({ title }) {
  const [boxesList, setBoxesList] = useState([]);
  const [cargando, setCargando] = useState(false);

  /* promesa */
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
  //  esto esta funcionando bien, lo veo por consola

  useEffect(() => {
    setCargando(true);
    getBoxes
      .then((res) => setBoxesList(res))
      .then((error) => console.log(error))
      .finally(() => setCargando(false));
    // eslint-disable-next-line
  }, []);

  console.log(boxesList);

  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        {cargando ? <p>Cargando... </p> : <ItemList boxesList={boxesList} />}
      </Row>
    </Container>
  );
}
