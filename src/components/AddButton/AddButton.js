import React from "react";
import { toast } from "react-toastify";
import { Button, Stack } from "react-bootstrap";

/* --------------- Declaracion de nuestro functional component -------------- */
export default function AddButton() {
  /* ----------------------- Declaracion del state hook ----------------------- */
  const [count, setCount] = React.useState(1);
  const stock = 3;

  /* -------------- Declaracion de un Efecto sobre nuestra cuenta ------------- */
  React.useEffect(() => {
    if (count !== 1) {
      console.log("Cambiaste el stock de un producto");
    }
  }, [count]);

  /* -------------------- Funcion para aumentar la cantidad ------------------- */
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  /* ------------------- Funcion para disminuir la cantidad ------------------- */
  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  /* ---------------------- Funcion de Agregar al carrito --------------------- */
  const onSubmit = () => {
    toast.success(`Agregaste ${count} producto al carrito `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("it works?");
  };
  /* ------------------------- Componente presentacion ------------------------ */
  const StockButton = ({ handleOnClick, text }) => {
    return (
      <Button
        className="stock-button "
        variant="secondary"
        onClick={() => handleOnClick()}>
        {text}
      </Button>
    );
  };
  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({ handleOnSubmit }) => {
    return (
      <Button
        className="add-button"
        variant="secondary"
        onClick={() => handleOnSubmit()}>
        Add to Cart
      </Button>
    );
  };

  return (
    <>
      <div className="add-button-container card__buttonStack">
        <Stack direction="horizontal" gap={3} className="">
          <StockButton text="-" handleOnClick={onDecrease} />
          <span className="add-button-count">{count}</span>
          <StockButton text="+" handleOnClick={onAdd} />
          <AddButton variant="  " handleOnSubmit={onSubmit} />
        </Stack>
      </div>
    </>
  );
}
