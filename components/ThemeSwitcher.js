import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className="text-right p-5">
      <FontAwesomeIcon
        icon={theme === "white" ? faMoon : faSun}
        className="text-3xl cursor-pointer"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
