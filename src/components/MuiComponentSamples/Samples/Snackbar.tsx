import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Box sx={{
        mb: 2,
        maxWidth: 600,
        "& > * + *": {
          mt: 2,
        },
      }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
          message={
            "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
          }
          action={
            <IconButton size="small" aria-label="close" color="inherit">
              <CloseIcon />
            </IconButton>
          }
        />
        <SnackbarContent
          message="I love candy. I love cookies. I love cupcakes."
          action={action}
        />
      </Box>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}
