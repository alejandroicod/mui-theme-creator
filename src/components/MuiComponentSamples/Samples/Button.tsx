import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

const groupStyle = {
  mb: 2,
  '& > *': {
    m: 2
  }
};

export default function ButtonsExample() {

  return (
    <div>
      <Typography variant="h6" id="contained-buttons">
        Primary Button
      </Typography>
      <Box sx={groupStyle}>
        {/* <Button variant="contained">Default</Button> */}
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>Primary</Button>

        {/* <Button variant="contained" color="secondary">
          Secondary
        </Button> */}
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="error" startIcon={<CloudUploadIcon />}>Error</Button>

        {/* <Button variant="contained" color="warning">
          Warning
        </Button> */}
        {/* <Button variant="contained" color="info">
          Info
        </Button> */}
        {/* <Button variant="contained" color="success">
          Success
        </Button> */}
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Box>

      <Typography variant="h6">
        Secondary Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>Primary</Button>

        <Button variant="outlined" color="primary" disabled>Disabled</Button>
        <Button variant="outlined" color="primary" disabled startIcon={<DeleteIcon />}>Disabled</Button>

      </Box>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="info">Info</Button>
        <Button disabled>Disabled</Button>
      </Box>

      {/* <Typography variant="h6">
        Outlined Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="success" disabled>Disabled</Button>

      </Box> */}

      {/* <Typography variant="h6">
        Buttons with icons and label
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>Primary</Button>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Secondary</Button>
        <Button variant="contained" color="error" startIcon={<CloudUploadIcon />}>Error</Button>
        <Button variant="contained" color="warning" startIcon={<CloudUploadIcon />}>Warning</Button>
        <Button variant="contained" color="info" startIcon={<CloudUploadIcon />}>Info</Button>
        <Button variant="contained" color="success" startIcon={<CloudUploadIcon />}>Disabled</Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
      </Box> */}

      <Typography variant="h6">
        Buttons sizes
      </Typography>
      <Box sx={groupStyle}>
        <Button
          variant="contained"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>
      <Typography variant="h6">
        Icon buttons
      </Typography>
      <Box sx={groupStyle}>
        <IconButton aria-label="delete"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="primary"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="error"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="info"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="primary" disabled><DeleteIcon /></IconButton>
      </Box>
      <Typography variant="h6">
        Icon button sizes
      </Typography>
      <Box sx={groupStyle}>
        <IconButton aria-label="delete" color="primary" size="small"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="primary" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
      </Box>
      <Typography variant="h6">
        Loading button
      </Typography>
      <Box sx={groupStyle}>
        <LoadingButton variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Box>

    </div>
  );
}
