import curry from "../base/curry";
import flatL from "./flatL";
import mapL from "./mapL";

export default curry(function flatMapL(f, iter) {
    return flatL(mapL(f, iter));
});