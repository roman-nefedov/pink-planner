import { forwardRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { RiDeleteBinLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { LoadingIcon } from "../LoadingIcon/index";
import { DeleteButton, ConfirmationBox } from "./index.styled";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteEventDialog = ({ eventId, refreshEvents }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setStatus("loading");

    fetch(`/event`, {
      method: "DELETE",
      body: JSON.stringify({ _id: eventId }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStatus("deleted");
      })
      .catch((error) => console.log("error!", error));
  };

  const handlePopUpClose = () => {
    handleClose();
    refreshEvents();
  };

  return (
    <div>
      <DeleteButton onClick={handleClickOpen}>
        <RiDeleteBinLine />
      </DeleteButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Remove event</DialogTitle>
        <DialogContent>
          Are you sure you want to remove this event?
        </DialogContent>
        {status === "loading" && <LoadingIcon />}
        {status === "deleted" && 
          <ConfirmationBox>
            <FcCheckmark /> Event deleted.
          </ConfirmationBox>
        }
        <DialogActions>
          <Button 
            onClick={handleDelete} 
            color="primary">
            YES
          </Button>
          <Button
            onClick={handlePopUpClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
