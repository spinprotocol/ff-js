import entriesL from "./Lazy/entriesL.js";
import filterL from "./Lazy/filterL.js";
import merge from "./merge.js"
import curry from "./curry.js";

export default curry(function pick(ks, obj) {
  return go(
    obj,
    entriesL,
    filterL(([k]) => ks.includes(k)),
    merge
  );
});

