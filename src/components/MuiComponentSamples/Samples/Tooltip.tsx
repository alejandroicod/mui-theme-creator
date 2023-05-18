import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { Box, Typography, Tooltip } from "@mui/material";
import React from "react";

export default function TooltipExample() {
  return (
    <div>
      <Typography variant="h6">Simple Tooltip</Typography>
      <Box>
        <Tooltip title="Delete">
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" sx={{ m: 2 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" sx={{ m: 2 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Typography variant="h6">Tooltip Arrow</Typography>
      <Box>
        <Tooltip title="Delete" arrow>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add" arrow>
          <Fab color="primary" sx={{ m: 2 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add" arrow>
          <Fab color="secondary" sx={{ m: 2 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
    </div>
  );
}
