import React, { forwardRef, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import NewEventForm from "../NewEventForm";
import { NewEventIcon } from "./index.styled";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const NewEventDialog = ({ refreshEvents }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NewEventIcon onClick={handleClickOpen}>+</NewEventIcon>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <NewEventForm closeDialog={handleClose} refreshEvents={refreshEvents} />
      </Dialog>
    </div>
  );
};
