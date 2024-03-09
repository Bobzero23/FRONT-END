import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const Submissions = [1, 1, 1, 1];

export default function SubmissionList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="space-y-2">
            {Submissions.length > 0 ? (
              Submissions.map((item) => <SubmissionCard />)
            ) : (
              <div className="">
                <div className="text-center">No Submission Found</div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
