import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <div>
      <Typography variant="h6">Paper Elevations (0-24)</Typography>
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
        <Paper elevation={0} />
        <Paper elevation={4} />
        <Paper elevation={8} />
        <Paper elevation={12} />
        <Paper elevation={16} />
        <Paper elevation={20} />
        <Paper elevation={24} />
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