import reduce from "../base/reduce";
import curry from "../base/curry";
import catchNoop from "./catchNoop";

export default curry(function reduceC(f, acc, iter) {
    return arguments.length == 2 ?
        reduce(f, catchNoop([...acc])) :
        reduce(f, acc, catchNoop([...iter]));
});