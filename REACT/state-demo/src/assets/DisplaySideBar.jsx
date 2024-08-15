import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const DisplaySideBar = () => {
  const [display, setdisplay] = useState("products");
  return (
    <Stack className="" direction="vertical" gap={2}>
      <Stack direction="horizontal" gap={2}>
        <Button onClick={() => setdisplay("products")} variant="success">
          produts
        </Button>
        <Button onClick={() => setdisplay("cards")}>cards</Button>
        <Button onClick={() => setdisplay("checkout")} variant="danger">
          checkout
        </Button>
      </Stack>
      <p>Right now you are displaying: {display} </p>
    </Stack>
  );
};

export default DisplaySideBar;
