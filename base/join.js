import curry from "./curry";
import reduce from "./reduce";

export default curry(function join(sep = ',', iter) {
    return reduce((a, b) => `${a}${sep}${b}`, iter);
});