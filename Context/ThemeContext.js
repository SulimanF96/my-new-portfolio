import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "white");
      setTheme("white");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "white" ? "dark" : "white");
    localStorage.setItem("theme", theme === "white" ? "dark" : "white");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useThemeContext };
