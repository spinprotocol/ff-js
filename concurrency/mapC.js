import mapL from "../lazy/mapL";
import takeAllC from "./takeAllC";
import curry from "../base/curry";

export default curry(function mapC(f, iter) {
    return takeAllC(mapL(f, iter));
});