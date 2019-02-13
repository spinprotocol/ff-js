import reduceS from "./reduceS";
import call from "./call";

export default function pipeS(f, ...fs) {
    return (...as) => reduceS(call, f(...as), fs);
}