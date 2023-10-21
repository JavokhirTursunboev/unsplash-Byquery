import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";

  return storedDarkMode || prefersDarkMode;
};
const CreateContextApp = createContext();
export const UseContextApp = () => useContext(CreateContextApp);

const ContextFunc = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchImage, setSearchImage] = useState("cat");
  const toggleDarkTheme = () => {
    const darkThemeBtn = !isDarkTheme;
    setIsDarkTheme(darkThemeBtn);
    localStorage.setItem("darkTheme", darkThemeBtn);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <CreateContextApp.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchImage, setSearchImage }}
    >
      {children}
    </CreateContextApp.Provider>
  );
};

export default ContextFunc;
