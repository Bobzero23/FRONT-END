import Dashboard from "@mui/icons-material/Dashboard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const menu = [
  { name: "Dashboard", paht: "/admin", icon: <Dashboard /> },
  { name: "Products", paht: "/admin/products", icon: <Dashboard /> },
  { name: "Customers", paht: "/admin/customers", icon: <Dashboard /> },
  { name: "Orders", paht: "/admin/orders", icon: <Dashboard /> },
  { name: "AddProducts", paht: "/admin/product/create", icon: <Dashboard /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding onClick={() => navigate(item.path)}>
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
      <Box sx={{ display: `${isLargeScreen}: "fles" : "block"` }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{ height: "100vh", width: 240, flexShrink: 0 }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Admin;
