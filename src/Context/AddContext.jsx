import { createContext, useState, useEffect } from "react";

export const appContext = createContext();

export function AppContextProvider({ children }) {


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);   
      return newTheme;
    });
  };


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <appContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </appContext.Provider>
  );
}
