import head from "./head";
import filterL from "../lazy/filterL";
import curry from "./curry";

export default curry(function find(f, iter) {
    return head(filterL(f, iter));
});