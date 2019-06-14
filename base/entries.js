import entriesL from "../lazy/entries";
import takeAll from "./takeAll";

export default function entries(a) {
  return takeAll(entriesL(a));
}