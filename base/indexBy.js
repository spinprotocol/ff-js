import curry from "./curry";
import reduce from "./reduce";

export default curry(function indexBy(f, iter) {
  return reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter);
});