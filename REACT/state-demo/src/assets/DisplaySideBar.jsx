import { useState } from "react";
import Stack from "react-bootstrap/Stack";

const DisplaySideBar = () => {
  const [display, setdisplay] = useState("products");
  return (
    <Stack className="" direction="vertical" gap={2}>
      <Stack direction="horizontal" gap={2}>
        <button onClick={() => setdisplay("products")}>produts</button>
        <button onClick={() => setdisplay("cards")}>cards</button>
        <button onClick={() => setdisplay("checkout")}>checkout</button>
      </Stack>
      <p>Right now you are displaying: {display} </p>
    </Stack>
  );
};

export default DisplaySideBar;
