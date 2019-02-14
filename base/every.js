import rejectL from "../lazy/rejectL";
import takeFirst from "./takeFirst";
import goFirst from "./goFirst";
import curry from "./curry";

export default curry(function every(f, iter) {
    return goFirst(takeFirst(rejectL(f, iter)), ({length}) => length == 0);
});