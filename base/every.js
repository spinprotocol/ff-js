import rejectL from "./lazy/rejectL";
import take1 from "./take1";
import go1 from "./go1";
import curry from "./curry";

export default curry(function every(f, iter) {
    return go1(take1(rejectL(f, iter)), ({length}) => length == 0);
});