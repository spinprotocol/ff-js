import curry from "./curry";
import isArray from "./isArray";
import every from "./every";
import entriesL from "../lazy/entriesL";

export default curry(function isMatch(a, b) {
    return (
        typeof a == 'function' ? !!a(b)
            :
        isArray(a) && isArray(b) ? every(v => b.includes(v), a)
            :
        typeof b == 'object' ? every(([k, v]) => b[k] == v, entriesL(a))
            :
        a instanceof RegExp ? b.match(a)
            :
        a == b
    );
});