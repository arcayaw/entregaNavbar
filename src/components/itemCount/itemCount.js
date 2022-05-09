import React, { useState } from "react";

import { Card, Button, Stack, Badge } from "react-bootstrap";
import Woming from "../../assets/img/nunchi-womin-min-min.jpg";

export default function ItemCount() {
  /* State Hook */
  const [count, setCount] = useState(0);

  /* funcion manejadora */
  const handleRest = () => {
    console.log("Ejecuto funcion");
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card
      style={{
        width: "30rem",
      }}
      className="card__container">
      <Card.Img variant="top" src={Woming} />{" "}
      <Card.Body className="card__body">
        <Card.Title variant="h1 display1" className="card__title">
          Box Spa
        </Card.Title>
        <Card.Text className="card__text">
          Regalo relax a esa persona que tanto quieres.
        </Card.Text>
        <Stack direction="horizontal" gap={2} className="card__buttonStack">
          <Button
            variant="secondary"
            className="card__button__minus"
            onClick={handleRest}>
            -
          </Button>
          <Badge bg="outline-dark" pill className="card__badge__text">
            {count}
          </Badge>
          <Button
            variant="secondary"
            className="card__button__add"
            onClick={() => setCount(count + 1)}>
            +
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
