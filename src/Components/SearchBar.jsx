import { Search } from "lucide-react";
import { useState, useEffect } from "react";

function SearchBar({ setQuery }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setQuery(inputValue), 300);
    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
      <Search size={18} className="text-gray-500 dark:text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="ml-2 w-full bg-transparent outline-none text-sm"
      />
    </div>
  );
}

export default SearchBar;
