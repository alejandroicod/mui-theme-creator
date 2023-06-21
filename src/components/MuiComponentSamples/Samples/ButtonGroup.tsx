import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";

const groupStyle = {
  mb: 2,
  '& > *': {
    m: 2
  }
};

const buttons = <>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</>

const iconButtons = <>
  <Button><SaveIcon /></Button>
  <Button><DeleteIcon /></Button>
  <Button><CloudUploadIcon /></Button>
</>

export default function ButtonGroupExample() {

  return (
    <div>
      <Typography variant="h6" id="contained-basic-button-group">
        Basic Button Group
      </Typography>
      {/* <Box sx={groupStyle}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {buttons}
        </ButtonGroup>
      </Box>
      <Typography variant="h6" id="contained-variants-button-group">
        Button Group Variants
      </Typography> */}
      <Box sx={groupStyle}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {buttons}
        </ButtonGroup>
        {/* <ButtonGroup variant="text" aria-label="text button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          {iconButtons}
        </ButtonGroup> */}
      </Box>
      <Typography variant="h6" id="contained-variants-button-group">
        Button Group Sizes
      </Typography>
      <Box sx={groupStyle}>
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
      {/* <Typography variant="h6" id="contained-variants-button-group">
        Button Group Colors
      </Typography>
      <Box sx={groupStyle}>
        <ButtonGroup color="primary" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="success" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box> */}
      <Typography variant="h6" id="vertical-button-group">
        Vertical Button Group
      </Typography>
      <Box sx={groupStyle}>
        <ButtonGroup orientation="vertical" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        {/* <ButtonGroup variant="contained" orientation="vertical" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup variant="text" orientation="vertical" aria-label="small button group">
          {buttons}
        </ButtonGroup> */}
      </Box>
    </div>
  );
}
