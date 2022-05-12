import React from "react";
import Item from "../Item/Item";

const ItemList = ({ boxesList }) => {
  return (
    <div>
      {boxesList.map((box) => (
        <Item box={box} key={box.id} />
      ))}
    </div>
  );
};

export default ItemList;
