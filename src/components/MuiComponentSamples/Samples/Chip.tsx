import DoneIcon from "@mui/icons-material/Done";
import FaceIcon from "@mui/icons-material/Face";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import React from "react";

const groupStyle = {
  mb: 2,
  pt: 1,
  "& > *": {
    m: 1
  }
};

export default function ChipExample() {

  const handleDelete = () => {
    console.info("You clicked the delete icon.")
  }

  const handleClick = () => {
    console.info("You clicked the Chip.")
  }

  return (
    <>
      <Typography variant="h6">Default</Typography>
      <Box sx={groupStyle}>
        <Chip label="Default" />
        <Chip color="primary" label="Primary" />
        <Chip color="secondary" label="Secondary" />
        <Chip color="error" label="Error" />
        <Chip color="warning" label="Warning" />
        <Chip color="info" label="Info" />
        <Chip color="success" label="Success" />
      </Box>
      <Box sx={groupStyle}>
        <Chip label="Disabled" disabled />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </Box>

      <Typography variant="h6">Outlined</Typography>
      <Box sx={groupStyle}>
        <Chip label="Default" />
        <Chip variant="outlined" color="primary" label="Primary" />
        <Chip variant="outlined" color="secondary" label="Secondary" />
        <Chip variant="outlined" color="error" label="Error" />
        <Chip variant="outlined" color="info" label="Info" />
      </Box>
      <Box sx={groupStyle}>
        <Chip variant="outlined" label="Basic" />
        <Chip variant="outlined" label="Disabled" disabled />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          variant="outlined"
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Clickable Link"
          component="a"
          href="#chip-outlined"
          clickable
        />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </Box>
      <Typography variant="h6">Chip sizes</Typography>
      <Box sx={groupStyle}>
        <Chip label="Small" size="small" />
        <Chip size="small" label="Default" />
        <Chip size="small" color="primary" label="Primary" />
        <Chip size="small" color="secondary" label="Secondary" />
        <Chip size="small" color="error" label="Error" />
        <Chip size="small" color="warning" label="Warning" />
        <Chip size="small" color="info" label="Info" />
        <Chip size="small" color="success" label="Success" icon={<FaceIcon />} />
      </Box>
      <Box sx={groupStyle}>
        <Chip label="Medium" size="medium" />
        <Chip label="Default" />
        <Chip color="primary" label="Primary" />
        <Chip color="secondary" label="Secondary" />
        <Chip color="error" label="Error" />
        <Chip color="warning" label="Warning" />
        <Chip color="info" label="Info" />
        <Chip color="success" label="Success" icon={<FaceIcon />} />
      </Box>
    </>
  )
}
