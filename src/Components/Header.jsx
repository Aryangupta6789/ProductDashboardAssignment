import { useContext } from "react";
import { appContext } from "../Context/AddContext";
import { Sun, Moon } from "lucide-react";
import SearchBar from "./SearchBar";

function Header({ setQuery }) {
  const { theme, toggleTheme } = useContext(appContext);

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-white/80 dark:bg-[#1c1c1e]/80 
        backdrop-blur-xl
        border-b border-[#e5e5e7] dark:border-[#3a3a3c]
        shadow-sm transition
      "
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:gap-4">

      
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-[#f5f5f7]">
            Product Dashboard
          </h1>

          {/* Mobile darkmode button */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="
                w-10 h-10 flex items-center justify-center 
                rounded-full 
                bg-[#e5e5e7] dark:bg-[#2c2c2e] 
                border border-[#d1d1d6] dark:border-[#3a3a3c] 
                hover:scale-105 transition
              "
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Searchbar center */}
        <div className="w-full md:flex-1">
          <SearchBar setQuery={setQuery} />
        </div>

        {/* Desktop darkmode toggle */}
        <div className="hidden md:block">
          <button
            onClick={toggleTheme}
            className="
              w-10 h-10 flex items-center justify-center 
              rounded-full 
              bg-[#e5e5e7] dark:bg-[#2c2c2e] 
              border border-[#d1d1d6] dark:border-[#3a3a3c] 
              hover:scale-105 transition
            "
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
