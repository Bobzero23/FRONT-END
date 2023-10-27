import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function MaterialUIDemo(params) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Puppy"
        label="label"
        value={name}
        onChange={handleChange}
      />
    </Box>
  );
}

export default MaterialUIDemo;
