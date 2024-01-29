import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/components/Admin";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Dashboard from "@mui/icons-material/Dashboard";

const menu = [
  { name: "Dashboard", paht: "/admin", icon: <Dashboard /> },
  { name: "Products", paht: "/admin/products", icon: <Dashboard /> },
  { name: "Customers", paht: "/admin/customers", icon: <Dashboard /> },
  { name: "Orders", paht: "/admin/orders", icon: <Dashboard /> },
  { name: "AddProducts", paht: "/admin/product/create", icon: <Dashboard /> },
  { name: "", paht: "" },
  { name: "", paht: "" },
];

const AdminRouters = () => {
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

      <List>
        <ListItem disablePadding onClick={() => navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
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
