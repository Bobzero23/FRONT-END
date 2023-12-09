import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/component/Admin";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AdminRouters = () => {
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

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisivle] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouters;
