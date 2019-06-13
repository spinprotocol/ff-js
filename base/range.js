import takeAll from "./takeAll.js";
import rangeL from "../lazy/rangeL.js";

export default function range(..._) {
  return takeAll(rangeL(..._));
}