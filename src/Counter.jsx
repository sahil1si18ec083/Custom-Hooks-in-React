import React from "react";
import { useState } from "react";
import usePrevious from "./CustomHooks/usePrevious";
const Counter = () => {
  const [count, setCount] = useState(0);
  const previousValue = usePrevious(count);

  return (
    <>
      <div className="flex">
        <div className="margin">
          <div> Current Value </div>
          <div>{count}</div>
        </div>
        <div className="margin">
          <div>Previous Value</div>
          <div>{previousValue}</div>
        </div>
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
