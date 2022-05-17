import React from "react";

export default function ItemDetail({ box = {} }) {
  return (
    <div className="itemDetail">
      <div className="contenedorCard">
        <div className="cardImagen">
          <img src={box.image} className="cardImg" alt="imagen producto" />
        </div>
        <div className="cardDetalle">
          <h1>{box.title}</h1>
          <p>{box.description}</p>

          <div className="cardFooter">
            <label className="precioProducto">${box.price}</label>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
