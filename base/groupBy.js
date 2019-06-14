import curry from "./curry";
import reduce from "./reduce";
import goFirst from "./goFirst";

export default curry(function groupBy(f, iter) {
  return reduce(
    (group, a) => goFirst(
      f(a),
      k => ((group[k] || (group[k] = [])).push(a), group)),
    {},
    iter
  );
});
