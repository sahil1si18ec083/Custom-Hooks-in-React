import { useRef } from "react";
import { useEffect } from "react";
const usePrevious = (value) => {
  const previousValue = useRef(value);
  // we donot want react to keep track of previousValue, thats why we are using useRef
  // THE CHANGES WILL BE REFLECTED ONLY WHEN value state changes

  useEffect(() => {
    previousValue.current = value;
  }, [value]);
  return previousValue.current;
};

export default usePrevious;
