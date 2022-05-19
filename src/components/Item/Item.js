import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <>
      <Card style={{ width: "30rem", margin: "2rem" }}>
        <Card.Img variant="top" src={props.image} className="" />
        <Card.Body className="card__body">
          <Card.Title variant="h1 display1" className="card__title">
            {props.name}
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>Precio: {props.price}</Card.Text>
          <ItemCount stock={props.stock} initial={1} />
          <Link to={`/producto/${props.id}`}>
            <Button className="botonContador"> Ver </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
