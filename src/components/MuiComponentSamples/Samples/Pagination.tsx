import React from "react";
import { Stack, Typography, Pagination, TablePagination } from '@mui/material';

const groupStyle = {
  mb: 2
};

export default function PaginationExample() {

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div>
      <Typography variant="h6" sx={groupStyle}>Basic Pagination</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>
      <Typography variant="h6" sx={groupStyle}>Outlined Pagination</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination variant="outlined" count={10} />
        <Pagination variant="outlined" count={10} color="primary" />
        <Pagination variant="outlined" count={10} color="secondary" />
        <Pagination variant="outlined" count={10} disabled />
      </Stack>
      <Typography variant="h6" sx={groupStyle}>Rounded Pagination</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination shape="rounded" count={10} />
        <Pagination shape="rounded" count={10} color="primary" />
        <Pagination shape="rounded" count={10} color="secondary" />
        <Pagination variant="outlined" shape="rounded" count={10} />
        <Pagination variant="outlined" shape="rounded" count={10} color="primary" />
        <Pagination variant="outlined" shape="rounded" count={10} color="secondary" />
        <Pagination variant="outlined" count={10} disabled />
      </Stack>
      <Typography variant="h6" sx={groupStyle}>Pagination Size</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>
      <Typography variant="h6" sx={groupStyle}>Pagination Buttons</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Stack>
      <Typography variant="h6" sx={groupStyle}>Table Pagination</Typography>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
