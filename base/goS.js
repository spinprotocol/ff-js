import reduceS from "./reduceS";
import call from "./call";

export default function goS(..._) {
    return reduceS(call, _);
}