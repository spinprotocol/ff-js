import curry from "./curry";

export default curry(function split(sep = '', str) {
  return str.split(sep);
});