import { useWindowDimensions } from "./CustomHooks/useWindowDimensions";
const Resize = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2>Window Dimensions:</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default Resize;
