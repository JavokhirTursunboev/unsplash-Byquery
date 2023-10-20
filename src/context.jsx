import { useContext } from "react";
import { useState } from "react";

import { createContext } from "react";

const CreateContextApp = createContext();

export const UseContextApp = () => useContext(CreateContextApp);

const ContextFunc = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchImage, setSearchImage] = useState("cow");
  const toggleDarkTheme = () => {
    const darkThemeBtn = !isDarkTheme;
    setIsDarkTheme(darkThemeBtn);
    document.body.classList.toggle("dark-theme", darkThemeBtn);
  };
  return (
    <CreateContextApp.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchImage, setSearchImage }}
    >
      {children}
    </CreateContextApp.Provider>
  );
};

export default ContextFunc;
