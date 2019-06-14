import takeAll from "./takeAll";
import rangeL from "../lazy/rangeL";

export default function range(..._) {
  return takeAll(rangeL(..._));
}