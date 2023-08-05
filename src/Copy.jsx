import useCopy from "./CustomHooks/useCopy";
import { useState } from "react";
const Copy = () => {
  const [text, setText] = useState("");

  const fnHandleCopy = useCopy(text);
  return (
    <>
      <div style={{ margin: "2vh 2vh" }}>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={"Write text you want to copy "}
        />
      </div>
      <button onClick={() => fnHandleCopy()}>Copy</button>
    </>
  );
};

export default Copy;
