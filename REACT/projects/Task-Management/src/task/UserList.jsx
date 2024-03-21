import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "../reduxToolkit/AuthSlice";
import { assignedTaskToUser } from "../reduxToolkit/TaskSlice";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

export default function UserList({ handleClose, open }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");

  useEffect(() => {
    dispatch(getUserList(localStorage.getItem("jwt")));
    console.log("users", auth.users);
  }, []);

  const handleAssignTask = (user) => {
    dispatch(assignedTaskToUser({ userId: user.id, taskId: taskId }));
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
          {auth.users.map((item, index) => (
            <>
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={`@${item.fullName
                        .split(" ")
                        .join("_")
                        .toLowerCase()}`}
                      primary={item.fullName}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button
                    onClick={() => handleAssignTask(item)}
                    sx={{
                      backgroundImage:
                        "linear-gradient(150deg, #c24dd0, #7a72fa)",
                    }}
                    className="customeButton"
                  >
                    select
                  </Button>
                </div>
              </div>
              {index !== auth.users.length - 1 && <Divider />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
