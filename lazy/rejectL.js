import filterL from "./filterL";
import curry from "../base/curry";
import goFirst from "../base/goFirst";
import not from "../base/not";

export default curry(function rejectL(f, iter) {
    return filterL(a => goFirst(f(a), not), iter);
});
