import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Function to render page numbers
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 ${currentPage === i ? 'text-white bg-blue-500' : 'bg-gray-200'} rounded-md mx-1`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center my-4">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="px-3 py-1 bg-gray-200 rounded-md mx-1">
          Prev
        </button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className="px-3 py-1 bg-gray-200 rounded-md mx-1">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
