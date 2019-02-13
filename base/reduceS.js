import toIter from "./toIter";
import nop from "./nop";
import go1 from "./go1";
import head from "./head";
import isStop from "./isStop";

const call2 = (acc, a, f) => 
    a instanceof Promise ?
        a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
        f(acc, a);

export default function reduceS(f, acc, iter) {
    if (arguments.length == 1) return (..._) => reduceS(f, ..._);
    if (arguments.length == 2) return reduceS(f, head(iter = toIter(acc)), iter);

    iter = toIter(iter);
    return go1(acc, function recur(acc) {
    let cur;
    while (!isStop(acc) && !(cur = iter.next()).done) {
        acc = call2(acc, cur.value, f);
        if (acc instanceof Promise) return acc.then(recur);
    }
    return isStop(acc) ? acc.value : acc;
    });
}