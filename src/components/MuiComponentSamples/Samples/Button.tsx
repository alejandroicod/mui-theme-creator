import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import Styles from "../../../styles/styles"


const h6Style = Styles.h6
const groupStyle = Styles.box

export default function ButtonsExample() {

  return (
    <div>
      <Typography sx={h6Style} variant="h6" id="contained-buttons">
        Primary Button
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>Primary</Button>
        <Button variant="contained" color="primary" disabled>Disabled</Button>
      </Box>

      <Typography sx={h6Style} variant="h6">
        Secondary Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>Primary</Button>
        <Button variant="outlined" color="primary" disabled>Disabled</Button>
        <Button variant="outlined" color="primary" disabled startIcon={<DeleteIcon />}>Disabled</Button>
      </Box>

      <Typography sx={h6Style} variant="h6">
        Text Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="info">Info</Button>
        <Button disabled>Disabled</Button>
      </Box>

      <Typography sx={h6Style} variant="h6">
        Danger Button
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="error" startIcon={<CloudUploadIcon />}>Error</Button>
        <Button variant="contained" color="error" disabled>Disabled</Button>
      </Box>

      <Typography sx={h6Style} variant="h6">
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

      <Typography sx={h6Style} variant="h6">
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

      <Typography sx={h6Style} variant="h6">
        Icon button sizes
      </Typography>
      <Box sx={groupStyle}>
        <IconButton aria-label="delete" color="primary" size="small"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" color="primary" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
      </Box>
      <Typography sx={h6Style} variant="h6">
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
