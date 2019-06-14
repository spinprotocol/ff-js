import valuesL from "../lazy/valuesL";
import takeAll from "./takeAll";

export default function values(a) {
    return takeAll(valuesL(a));
}