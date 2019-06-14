import curry from "./curry";

export default curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
});