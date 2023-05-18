import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const groupStyle = {
  mb: 2,
  width: "100%",
};

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    MUI
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
  >
    Level 2
  </Link>,
  <Link
    underline="hover"
    key="3"
    color="inherit"
  >
    Level 3
  </Link>,
  <Link
    underline="hover"
    key="4"
    color="inherit"
  >
    Level 4
  </Link>,
  <Typography key="5" color="text.primary">
    Level 5
  </Typography>,
];

export default function BasicBreadcrumbs() {
  return (
    <>
      <Typography variant="h6">
        Basic Breadcrumb
      </Typography>
      <Box sx={groupStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Typography variant="h6">
        Collapsible Breadcrumb
      </Typography>
      <Box sx={groupStyle}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
    </>
  );
}