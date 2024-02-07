import React from "react";
import Achievement from "./Achievement";
import { Grid } from "@mui/material";

const AdminDashBoard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </div>
  );
};

export default AdminDashBoard;
