import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const DisplaySideBar = () => {
  const [display, setdisplay] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${display}`)
      .then((response) => response.json())
      .then((response) => setItems(response));
  });

  return (
    <Stack className="" direction="vertical" gap={2}>
      <Stack direction="horizontal" gap={2}>
        <Button onClick={() => setdisplay("posts")} variant="success">
          posts
        </Button>
        <Button onClick={() => setdisplay("users")}>users</Button>
        <Button onClick={() => setdisplay("comments")} variant="danger">
          comments
        </Button>
      </Stack>
      <p>Right now you are displaying: {display} </p>
      <Stack direction="vertical">
        {items.map((item, index) => (
          <div className="border-bottom" key={index}>
            {JSON.stringify(item)}
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default DisplaySideBar;
