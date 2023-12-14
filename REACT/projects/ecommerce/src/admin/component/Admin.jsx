import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
  useTheme,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./Dashboard";
import CreateProductForm from "./CreateProductForm";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme(); //to access some screen view properties
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); //to know if the current screen is large or not (boolean)
  const [sideBarVisible, setSideBarVisivle] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid blue",
        height: "100%",
        paddingRight: "10px",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}

      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: "24px" }}>{item.icon}</ListItemIcon>
            </ListItemButton>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <div>{drawer}</div>

        <Box>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/products/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
