import reduce from "./reduce";
import call from "./call";

export default function go(..._) {
    return reduce(call, _);
}
