import keysL from "../lazy/keysL";
import takeAll from "./takeAll";

export default function keys(a) {
  return takeAll(keysL(a));
}