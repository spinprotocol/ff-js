import mapL from "../lazy/mapL.js";
import takeAllC from "./takeAllC.js";
import curry from "../base/curry.js";

export default curry(function mapC(f, iter) {
    return takeAllC(mapL(f, iter));
});