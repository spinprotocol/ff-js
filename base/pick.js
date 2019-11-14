import entriesL from "../lazy/entriesL";
import filterL from "../lazy/filterL";
import object from "./object"
import go from "./go";
import curry from "./curry";

export default curry(function pick(ks, obj) {
  return go(
    obj,
    entriesL,
    filterL(([k]) => ks.includes(k)),
    object
  );
});

