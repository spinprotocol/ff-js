import go from "./go";
import rangeL from "../lazy/rangeL";
import mapL from "../lazy/mapL";
import takeAll from "./takeAll";

export default function merge(ks, vs) {
  return go(
    rangeL(ks.length || vs.length),
    mapL(i => [ks[i], vs[i]]),
    takeAll
  );
}

