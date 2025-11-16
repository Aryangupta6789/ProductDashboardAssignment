import { createContext, useState } from 'react'

export const appContext = createContext()

export function AppContextProvider (props) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <appContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </appContext.Provider>
  )
}
