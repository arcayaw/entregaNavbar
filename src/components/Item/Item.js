import React from "react";
import { Card } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";

export default function Item({ box }) {
  return (
    // <Card
    //   style={{
    //     width: "30rem",
    //   }}
    //   className="card__container">
    //   <Card.Img src={box.image} variant="top" />
    //   <Card.Body className="card__body">
    //     <Card.Title variant="h1 display1" className="card__title">
    //       {box.Title}
    //     </Card.Title>
    //     <Card.Text className="card__text">
    //       <p>Description: {box.dresciption}</p>
    //       <p>Precio: {box.precio}</p>
    //     </Card.Text>
    //     <AddButton />
    //   </Card.Body>
    // </Card>

    <Card style={{ width: "30rem", margin: "2rem" }}>
      <Card.Img variant="top" src="{box.image}" className="card__container" />
      <Card.Body className="card__body">
        <Card.Title variant="h1 display1" className="card__title">
          {box.name}
        </Card.Title>
        <Card.Text>{box.description}</Card.Text>
        <Card.Text>Precio: {box.price}</Card.Text>

        <AddButton />
      </Card.Body>
    </Card>
  );
}
