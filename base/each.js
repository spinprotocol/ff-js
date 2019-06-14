import goFirst from "./goFirst";
import reduce from "./reduce";
import curry from "./curry";

export default curry(function each(f, iter) {
  return goFirst(reduce((_, a) => f(a), null, iter), _ => iter);
});