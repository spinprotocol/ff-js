import curry from "./curry";
import toIter from "./toIter";
import nop from "./nop";

export default curry(function take(l, iter) {
    if (l === 0) return [];
    let res = [];
    iter = toIter(iter);
    return function recur() {
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            if (a instanceof Promise) {
                return a
                .then(a => (res.push(a), res).length == l ? res : recur())
                .catch(e => e == nop ? recur() : Promise.reject(e));
            }
            res.push(a);
            if (res.length == l) return res;
        }
        return res;
    } ();
});