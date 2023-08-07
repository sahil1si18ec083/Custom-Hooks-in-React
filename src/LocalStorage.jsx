import { useEffect, useState } from "react";

import useLocalStorage from "./CustomHooks/useLocalStorage";

const LocalStorage = () => {
  const { value, setValue } = useLocalStorage("inputValue", "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default LocalStorage;
