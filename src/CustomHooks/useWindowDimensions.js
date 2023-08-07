import { useState, useEffect } from "react";
const useWindowDimensions = () => {
  // useWindowDimensions that returns an object with two properties:
  // the current width and height of the window.
  //  The hook should update the dimensions whenever the window is resized
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
};

export default useWindowDimensions;
