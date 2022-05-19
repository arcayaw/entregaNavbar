import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ItemDetail({ producto = {} }) {
  const [cambiarBoton, setCambiarBoton] = useState(true);
  // const { cartList, addToCart } = useCartContext();

  const onAdd = (count) => {
    setCambiarBoton(false);
    // addTocart({ box: producto, quantity: count });
  };

  return (
    <div className="itemDetail">
      <div className="contenedorCard">
        <div className="cardImagen">
          <img src={producto.image} className="cardImg" alt="imagen producto" />
        </div>
        <div className="cardDetalle">
          <h1>{producto.title}</h1>
          <p>{producto.description}</p>
          <p>Contiene: {producto.contiene}</p>

          <div className="cardFooter">
            <label className="precioProducto">${producto.price}</label>
            {cambiarBoton ? (
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            ) : (
              <div>
                <Link to={"/cart"}>
                  <Button className="botonContador">Ir a pagar</Button>
                </Link>

                <Link to={"/"}>
                  <Button className="botonContador">Seguir comprando</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
