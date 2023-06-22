import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const action = (
  <Button color="secondary" size="small">
    Read more
  </Button>
)

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarExample() {

  const [open, setOpen] = React.useState(false);

  const handleClick = (severity) => {
    setOpen(severity);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={() => handleClick("info")}>
          Open info snackbar
        </Button>
        <Snackbar open={open == "info"} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            This is an info message!
          </Alert>
        </Snackbar>
        <Button variant="outlined" onClick={() => handleClick("success")}>
          Open success snackbar
        </Button>
        <Snackbar open={open == "success"} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        <Button variant="outlined" onClick={() => handleClick("error")}>
          Open error snackbar
        </Button>
        <Snackbar open={open == "error"} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        </Snackbar>
        <Button variant="outlined" onClick={() => handleClick("warning")}>
          Open warning snackbar
        </Button>
        <Snackbar open={open == "warning"} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            This is a warning message!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}
