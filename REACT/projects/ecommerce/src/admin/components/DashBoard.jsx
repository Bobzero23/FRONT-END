import React from "react";
import Achievement from "./Achievement";
import { Grid } from "@mui/material";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "./ProductsTable";

const AdminDashBoard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashBoard;
