import React, { useState } from "react";
import Card from "../../../packagesUi/card/index";

const SliderPagination = ({ items, itemsPerPage = 3, selector }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 overflow-hidden transition-all duration-300">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <Card developer={item} selector={selector} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={goToPrevious}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button
          onClick={goToNext}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SliderPagination;
