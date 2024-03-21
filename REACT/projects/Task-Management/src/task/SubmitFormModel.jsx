import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksById, updateTask } from "../reduxToolkit/TaskSlice";
import { useLocation } from "react-router-dom";
import { submitTask } from "../reduxToolkit/SubmissionSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function SubmitFormModel({ item, handleClose, open }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const dispatch = useDispatch();
  const { task } = useSelector((store) => store);

  const [formData, setFormData] = useState({
    githubLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTask({ taskId: taskId, githubLink: formData.githubLink }));
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
                  label="Github Link"
                  name="githubLink"
                  fullWidth
                  value={formData.githubLink}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="description"
                  name="description"
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.description}
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
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
