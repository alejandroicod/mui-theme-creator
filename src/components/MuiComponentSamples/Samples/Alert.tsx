import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React from "react";

const groupStyle = {
  mb: 2,
  width: "100%",
};

export default function AvatarExample() {

  return (
    <Box>
      <Typography variant="h6" id="alerts">
        Basic Alerts
      </Typography>
      <Stack sx={groupStyle} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Typography variant="h6" id="alerts">
        Alerts variants
      </Typography>
      <Stack sx={groupStyle} spacing={2}>
        <Alert variant="outlined" severity="error">This is an error alert — check it out!</Alert>
        <Alert variant="outlined" severity="warning">This is a warning alert — check it out!</Alert>
        <Alert variant="outlined" severity="info">This is an info alert — check it out!</Alert>
        <Alert variant="outlined" severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Stack sx={groupStyle} spacing={2}>
        <Alert variant="filled" severity="error">This is an error alert — check it out!</Alert>
        <Alert variant="filled" severity="warning">This is a warning alert — check it out!</Alert>
        <Alert variant="filled" severity="info">This is an info alert — check it out!</Alert>
        <Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Typography variant="h6" id="alerts">
        Alerts with description
      </Typography>
      <Stack sx={groupStyle} spacing={2}>

        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>

      </Stack>
      <Typography variant="h6" id="alerts">
        Alerts with actions
      </Typography>
      <Stack sx={groupStyle} spacing={2}>
        <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </Box>
  )
}
