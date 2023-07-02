import { useLayoutEffect, useState } from "react";

export const usePagination = (search) => {
  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const paginateHandler = (number) => {
    setPage(Number(number));
  };

  useLayoutEffect(() => {
    paginateHandler(1);
  }, [search]);

  return {
    paginateHandler,
    offset,
    limit,
    page,
  };
};
