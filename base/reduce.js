import toIter from "./toIter";
import nop from "./nop";
import goFirst from "./goFirst";
import head from "./head";

const call2 = (acc, a, f) =>
  a instanceof Promise ?
  a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
  f(acc, a);

export default function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return goFirst(
    acc, 
    function recur(acc) {
      let cur;
      while (!(cur = iter.next()).done) {
        acc = call2(acc, cur.value, f);
        if (acc instanceof Promise) return acc.then(recur);
      }
      return acc;
    }
  );
}