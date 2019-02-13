import curry from "../base/curry";
import catchNoop from "./catchNoop";
import take from "../base/take";

export default curry(function takeC(l, iter) {
    return take(l, catchNoop([...iter]));
});