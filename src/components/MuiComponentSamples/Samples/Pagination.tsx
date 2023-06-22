import React from "react";
import { Stack, Typography, Pagination, TablePagination } from '@mui/material';
import Styles from "../../../styles/styles"

const groupStyle = Styles.box
const h6Style = Styles.h6

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
      <Typography variant="h6" sx={h6Style}>Basic Pagination</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} color="primary" />
        <Pagination count={10} disabled />
      </Stack>
      <Typography variant="h6" sx={h6Style}>Pagination Size</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} size="small" color="primary" />
        <Pagination count={10} color="primary" />
        <Pagination count={10} size="large" color="primary" />
      </Stack>
      <Typography variant="h6" sx={h6Style}>Pagination Buttons</Typography>
      <Stack spacing={2} sx={groupStyle}>
        <Pagination count={10} showFirstButton showLastButton color="primary" />
        <Pagination count={10} hidePrevButton hideNextButton color="primary" />
      </Stack>
      <Typography variant="h6" sx={h6Style}>Table Pagination</Typography>
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
