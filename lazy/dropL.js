import curry from "../base/curry.js";
import filterL from "./filterL.js";

export default curry(function dropL(l, iter) {
  let i = 0;
  return filterL(_ => (++i) > l, iter);
});
