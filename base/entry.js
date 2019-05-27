import goFirst from "./goFirst";
import reduce from "./reduce";

export default function entry(ks, vs) {
  return goFirst(
    ks,
    ks => reduce((acc, k) => (acc.push([k, vs[ks.indexOf(k)]]), acc), [], ks)
  );
}