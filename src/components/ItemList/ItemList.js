import React from "react";
import Item from "../Item/Item";

const ItemList = ({ boxesList }) => {
  return (
    <>
      {boxesList.map((box) => (
        <Item box={box} key={box.id} />
      ))}
    </>
  );
};
//meeter clases aca para hacer el el estilo dedel cart list

export default ItemList;
