import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {[1, 1, 1].map((item) => (
            <div className="flex items-center justify-between w-full">
              <div>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Code With Zosh"}
                    secondary="@code_with_zosh"
                  />
                </ListItem>
              </div>
              <div>
                <Button
                  sx={{
                    backgroundImage:
                      "linear-gradient(150deg, #c24dd0, #ff005d)",
                  }}
                  className="customeButton"
                >
                  select
                </Button>
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
