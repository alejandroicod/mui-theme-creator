/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Link</Link>
      <Link href="#" color="primary">Primary link</Link>
      <Link href="#" color="secondary">Secondary link</Link>
      <Link href="#" color="error">Error link</Link>

      <Link href="#" color="inherit">
        Link color inherit
      </Link>
      <Link href="#" variant="body2">
        Link variant body2
      </Link>
    </Box>
  );
}