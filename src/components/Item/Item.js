import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ box }) {
  return (
    <Card style={{ width: "30rem", margin: "2rem" }}>
      <Card.Img variant="top" src={box.image} className="" />
      <Card.Body className="card__body">
        <Card.Title variant="h1 display1" className="card__title">
          {box.name}
        </Card.Title>
        <Card.Text>{box.description}</Card.Text>
        <Card.Text>Precio: {box.price}</Card.Text>
        <ItemCount stock={box.stock} initial={1} />
      </Card.Body>
    </Card>
  );
}
