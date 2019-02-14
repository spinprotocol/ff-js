import mapL from "../lazy/mapL";
import curry from "./curry";
import takeAll from "./takeAll";

export default curry(function map(f, iter) {
    return takeAll(mapL(f, iter));
});