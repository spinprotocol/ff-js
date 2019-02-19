import valuesL from "../lazy/valuesL.js";
import takeAll from "./takeAll.js";

export default function values(a) {
    return takeAll(valuesL(a));
}