import keysL from "../lazy/keysL.js";
import takeAll from "./takeAll.js";

export default function keys(a) {
  return takeAll(keysL(a));
}