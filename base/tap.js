import reduce from "./reduce";
import call from "./call";
import goFirst from "./goFirst";

export default function tap(f, ...fs) {
    return (a, ...as) => goFirst(reduce(call, f(a, ...as), fs), _ => a);
}