import React from "react";
import Achievement from "./Achievement";
import { Grid } from "@mui/material";

const AdminDashBoard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
        <Achievement />
      </Grid>
    </div>
  );
};

export default AdminDashBoard;
