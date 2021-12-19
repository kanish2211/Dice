import react, { useContext } from "react";
import AppTheme from "../Context/Apptheme";

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(AppTheme);
  return (
    <div>
      <button
        onClick={() => {
          setTheme((_theme) => (_theme === "green" ? "blue" : "green"));
          console.log("set Theme", theme);
        }}
      >
        Switch Theme
      </button>
    </div>
  );
};
export default ThemeToggler;
