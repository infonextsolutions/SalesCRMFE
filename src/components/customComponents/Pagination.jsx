import {Pagination} from "@mui/material";
import {Stack} from "@mui/material";

export default function BasicPagination({
  totalPages,
  currentPage,
  handlePageChange,
  paginationClass
}) {
  return (
    <Stack spacing={2} className="pagination_container">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        defaultPage={1}
        className={paginationClass}
      />
    </Stack>
  );
}
