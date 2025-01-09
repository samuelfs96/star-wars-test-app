import { useState } from "react";

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => {
        setCurrentPage(page);
      };
      
  return {
    onPageChange,
    currentPage
  }
}