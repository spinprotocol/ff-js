import filterL from "./lazy/filterL";
import curry from "./curry";
import takeAll from "./takeAll";

export default curry(function filter(f, iter) {
    return takeAll(filterL(f, iter));
});