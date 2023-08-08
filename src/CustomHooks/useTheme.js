const useTheme = () => {
  // useTheme that holds the current value of the theme which can be either “light” or “dark”.
  //  The hook should be able to store and manage the information on whether the page should be using light or dark mode.
  //   It should return an object with two properties
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};

export default useTheme;
