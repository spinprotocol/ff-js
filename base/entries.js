import entriesL from "../lazy/entriesL";
import takeAll from "./takeAll";

export default function entries(a) {
  return takeAll(entriesL(a));
}