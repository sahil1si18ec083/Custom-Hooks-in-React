// useCopy is a custom hook that will copy the passed text to it
const useCopy = (text) => {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return copy;
};
export default useCopy;
