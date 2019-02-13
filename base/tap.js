import reduce from "./reduce";
import call from "./call";
import go1 from "./go1";

export default function tap(f, ...fs) {
    return (a, ...as) => go1(reduce(call, f(a, ...as), fs), _ => a);
}