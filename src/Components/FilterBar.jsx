function FilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
}) {
  return (
    <div
      className="
        w-full 
        bg-white dark:bg-gray-900/40
        border border-gray-300 dark:border-gray-700 
        rounded-xl 
        p-4 
        flex flex-col md:flex-row 
        gap-4 md:gap-8
      "
    >
      {/* Category Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
        <label className="text-sm text-gray-700 dark:text-gray-300">
          Category:
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="
            w-full 
            px-4 py-2 
            bg-white dark:bg-gray-800 
            text-gray-700 dark:text-gray-200
            border border-gray-300 dark:border-gray-700 
            rounded-lg 
            focus:outline-none 
            focus:border-cyan-400
          "
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
              className="capitalize"
            >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
        <label className="text-sm text-gray-700 dark:text-gray-300">
          Sort Price:
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            w-full 
            px-4 py-2 
            bg-white dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border border-gray-300 dark:border-gray-700 
            rounded-lg 
            focus:outline-none 
            focus:border-cyan-400
          "
        >
          <option value="">Default</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
