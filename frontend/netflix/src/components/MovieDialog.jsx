import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackeground";

export default function MovieDialog() {
  const dispatch = useDispatch();
  const { open, id } = useSelector((state) => state.movie);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#141414",
            borderRadius: "16px",
            overflow: "hidden",
            color: "white",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <VideoBackground movieId={id} />
        </DialogContent>

        <DialogActions
          sx={{
            background: "#141414",
            px: 3,
            py: 2,
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            color="error"
            sx={{
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
