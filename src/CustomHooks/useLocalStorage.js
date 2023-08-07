import { useState, useEffect } from "react";
// custom hook called useLocalStorage(key, initialValue)
// that can be used to store and retrieve data from local storage.
// You should use the key prop as the key for the data in local storage and
// initialValue as the initial value. The hook should return an object with two properties:

// the current value of the data, which should be initialized to the value stored in local storage (if it exists), or the initialValue argument (if it doesn't)

// A  function that can be used to update the value of the data in local storage
//  Every time the value of the data is updated, the hook should update the corresponding value in local storage.

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (value === null) {
      if (localStorage.getItem(key)) {
        localStorage.setItem(key, localStorage.getItem(key));
        setValue(localStorage.getItem(key));
      } else {
        localStorage.setItem(key, initialValue);
        setValue(initialValue);
      }
    } else {
      localStorage.setItem(key, value);
      setValue(localStorage.getItem(key));
    }
  }, [value]);

  return { value, setValue };
};

export default useLocalStorage;
