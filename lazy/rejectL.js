import filterL from "./filterL";
import curry from "../base/curry";
import go1 from "../base/go1";
import not from "../base/not";

export default curry(function rejectL(f, iter) {
    return filterL(a => go1(f(a), not), iter);
});
