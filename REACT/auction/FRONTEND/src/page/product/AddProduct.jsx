import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../state/productSlice.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AddProduct = ({ handleClose, open }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    link: "",
    startingBid: "",
    finalBid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addProduct(formData));
    setFormData({ link: "", startingBid: "", finalBid: "" });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={12}>
                <TextField
                  label="Paste the image link"
                  name="link"
                  fullWidth
                  value={formData.link}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter a starting bid"
                  name="startingBid"
                  fullWidth
                  value={formData.startingBid}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter a final bid"
                  name="finalBid"
                  fullWidth
                  value={formData.finalBid}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    padding: "0.9rem",
                    color: "white",
                    backgroundImage:
                      "linear-gradient(150deg, #c24dd0, #7a72fa)",
                  }}
                >
                  ADD PRODUCT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProduct;
