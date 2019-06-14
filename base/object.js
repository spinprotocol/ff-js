import reduce from "./reduce";

export default function object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}