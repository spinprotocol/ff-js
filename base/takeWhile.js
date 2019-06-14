import toIter from "./toIter";
import curry from "./curry";
import goFirst from "./goFirst";
import nop from "./nop";

export default curry(function takeWhile(f, iter) {
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = goFirst(a, a => f(a, res));
      if (!b) return res;
      if (b instanceof Promise) {
        return b
          .then(async b => b ? (res.push(await a), recur()) : res)
          .catch(e => e == nop ? recur() : Promise.reject(e));
      }
      res.push(a);
    }
    return res;
  } ();
});