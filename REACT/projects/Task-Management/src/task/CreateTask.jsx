import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid black",
  boxShadow: 24,
  p: 4,
};

const [formData, setFormData] = useState({
  title: "",
  image: "",
  description: "",
  tage: [],
  deadline: new Date(),
});

const handleChange = (event) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleTagsChange = (event, value) => {
  setSelectedTags(value);
};

export default function CreateTask({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12}>
              <TextField
                label="title"
                name="title"
                fullWidth
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
