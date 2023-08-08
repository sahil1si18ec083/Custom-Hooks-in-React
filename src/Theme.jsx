import useTheme from "./CustomHooks/useTheme";
const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        style={{
          height: "100vh",
          transition: "0.3s ease-in",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default Theme;
