import * as React from "react";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createTask } from "../reduxToolkit/TaskSlice";

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

export default function CreateTask({ handleClose, open }) {
  const [selectedTags, setSelectedTags] = useState();
  const dispatch = useDispatch();

  //the tags to select from
  const tags = [
    "Angular",
    "React",
    "Vue",
    "SpringBoot",
    "Node",
    "Python",
    "Php",
    "Flask",
    ".NET",
    "Express",
  ];

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  };

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };

  const formatDate = (input) => {
    let {
      $y: year,
      $M: month,
      $D: day,
      $H: hours,
      $m: minutes,
      $s: seconds,
      $ms: milliseconds,
    } = input;

    const date = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );
    const formattedDate = date.toISOString();
    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { deadline } = formData;
    formData.deadline = formatDate(formData.deadline);
    formData.tags = selectedTags;
    dispatch(createTask(formData));
    console.log("formData: ", formData, "deadline: ", formData.deadline);
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
                  label="title"
                  name="title"
                  fullWidth
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="image"
                  name="image"
                  fullWidth
                  value={formData.image}
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
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField label="technologies" fullWidth {...params} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    className="w-full"
                    label="Deadline"
                    onChange={handleDeadlineChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
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
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
