import { green } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

const groupStyle = {
  mb: 2
};

export default function IconExample() {

  return (
    <div>
      <Typography variant="h6" sx={groupStyle}>Icon Colors</Typography>
      <Box>
        <HomeIcon sx={{ m: 2 }} />
        <HomeIcon color="primary" sx={{ m: 2 }} />
        <HomeIcon color="secondary" sx={{ m: 2 }} />
        <HomeIcon color="action" sx={{ m: 2 }} />
        <HomeIcon color="disabled" sx={{ m: 2 }} />
        <HomeIcon sx={{ m: 2, color: green[500] }} />
      </Box>
      <Typography variant="h6" sx={groupStyle}>Icon Sizes</Typography>
      <Box>
        <HomeIcon fontSize="small" sx={{ m: 2 }} />
        <HomeIcon sx={{ m: 2 }} />
        <HomeIcon fontSize="large" sx={{ m: 2 }} />
      </Box>
    </div>
  )
}
