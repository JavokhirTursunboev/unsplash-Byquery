import { useContext } from "react";
import { useState } from "react";

import { createContext } from "react";

const CreateContextApp = createContext();

export const UseContextApp = () => useContext(CreateContextApp);

const ContextFunc = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const darkThemeBtn = !isDarkTheme;
    setIsDarkTheme(darkThemeBtn);
  };
  return (
    <CreateContextApp.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </CreateContextApp.Provider>
  );
};

export default ContextFunc;
