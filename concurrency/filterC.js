import filterL from "../lazy/filterL";
import takeAllC from "./takeAllC";
import curry from "..base/curry";

export default curry(function filterC(f, iter) {
    return takeAllC(filterL(f, iter));
});