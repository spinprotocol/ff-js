import goFirst from "./goFirst.js";
import reduce from "./reduce.js";
import curry from "./curry.js";

export default curry(function each(f, iter) {
  return goFirst(reduce((_, a) => f(a), null, iter), _ => iter);
});