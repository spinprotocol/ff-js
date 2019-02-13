import reduce from "./reduce";
import call from "./call";

export default function pipe(f, ...fs) {
    return (...as) => reduce(call, f(...as), fs);
}