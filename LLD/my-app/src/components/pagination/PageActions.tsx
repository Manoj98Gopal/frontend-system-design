import { Icon } from "@iconify/react";

interface PageActionsProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

const PageActions = ({
  totalPages,
  currentPage,
  onPageChange
}: PageActionsProps) => {
  const total: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);

  const hasMorePages = totalPages > 5;
  
  const startIndex = hasMorePages
    ? Math.min(currentPage - 1, totalPages - 5)
    : 0;
  const showPages = hasMorePages ? total.slice(startIndex, startIndex + 5) : total;

  return (
    <div className="flex gap-4 items-center pt-4">
      <button
        className="cursor-pointer px-2"
        onClick={() => {
          onPageChange && onPageChange(currentPage - 2);
        }}
        disabled={currentPage === 1}
      >
        <Icon
          icon="material-symbols-light:arrow-back-ios-new-rounded"
          width="24"
          height="24"
        />
      </button>
      {showPages.map((pageNumber) =>
        <span
          key={pageNumber}
          className={`cursor-pointer px-2 ${currentPage === pageNumber
            ? "text-black font-bold"
            : "text-gray-500"}`}
          onClick={() => onPageChange && onPageChange(pageNumber - 1)}
        >
          {pageNumber}
        </span>
      )}
      {hasMorePages && showPages[showPages.length - 1] < totalPages &&
        <span className="px-2 text-gray-500">...</span>}
      <button
        className="cursor-pointer px-2"
        onClick={() => {
          onPageChange && onPageChange(currentPage);
        }}
        disabled={currentPage === totalPages}
      >
        <Icon
          icon="material-symbols-light:arrow-forward-ios-rounded"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default PageActions;
