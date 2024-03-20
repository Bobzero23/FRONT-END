import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";
import CreateTask from "../../task/CreateTask";
import { useDispatch } from "react-redux";
import { logout } from "../../reduxToolkit/AuthSlice";

const menu = [
  { name: "HOME", value: "HOME", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "Home", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState("HOME");

  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);
    if (item.name == "Create New Task") {
      handleOpenCreateTaskModel();
    } else if (item.name == "HOME") {
      updatedParams.delete("filter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
    setActiveMenu(item.name);
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log("Handle logout");
  };

  /**Create new task form STATE*/
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);

  const handleCloseCreateTaskForm = () => {
    setOpenCreateTaskForm(false);
  };

  const handleOpenCreateTaskModel = () => {
    setOpenCreateTaskForm(true);
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <dir className="flex justify-center p-0 m-0">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              className="border-2s border-[#c24dd0]"
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </dir>

          {menu
            .filter((item) => item.role.includes(role))
            .map((item) => (
              <p
                onClick={() => handleMenuChange(item)}
                className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                  activeMenu === item.name ? "activeMenuItem" : "menuItem"
                }`}
              >
                {item.name}
              </p>
            ))}

          <Button
            onClick={handleLogout}
            className="logoutButton"
            fullWidth
            sx={{
              padding: ".7rem",
              borderRadius: "2rem",
              backgroundImage: "linear-gradient(150deg, #c24dd0, #ff005d)",
            }}
          >
            Loguot
          </Button>
        </div>
      </div>
      <CreateTask
        open={openCreateTaskForm}
        handleClose={handleCloseCreateTaskForm}
      />
    </>
  );
};

export default SideBar;
