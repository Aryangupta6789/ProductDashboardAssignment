export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">

      {/* back button */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border bg-white dark:bg-gray-700 disabled:opacity-40"
      >
        Prev
      </button>

      {/* Page Numberss */}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`
            px-3 py-1 rounded-md border
            ${
              currentPage === i + 1
                ? 'bg-cyan-600 text-white border-cyan-600'
                : 'bg-white dark:bg-gray-700 border-gray-400 dark:border-gray-600'
            }
          `}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border bg-white dark:bg-gray-700 disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}
