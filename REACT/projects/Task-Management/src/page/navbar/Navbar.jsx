import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { task, auth } = useSelector((store) => store);
  return (
    <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
      <p className="font-bold text-lg">Bobzero Task Manager</p>

      <div className="flex items-center gap-5">
        <p>{auth.user?.fullName}</p>
        <Avatar src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D">
          C
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
