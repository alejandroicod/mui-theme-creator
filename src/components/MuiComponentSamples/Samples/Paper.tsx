import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <div>
      <Typography variant="h6">Paper Elevations (4-10)</Typography>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={4} sx={{ p: 2 }}><Typography variant="h6">4</Typography></Paper>
        <Paper elevation={6} sx={{ p: 2 }}><Typography variant="h6">6</Typography></Paper>
        <Paper elevation={8} sx={{ p: 2 }}><Typography variant="h6">8</Typography></Paper>
        <Paper elevation={10} sx={{ p: 2 }}><Typography variant="h6">10</Typography></Paper>
      </Box>
      <Typography variant="h6">Outlined Paper</Typography>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant="outlined" />
      </Box>
    </div>
  );
}