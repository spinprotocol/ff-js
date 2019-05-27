import curry from "./curry";
import goFirst from "./goFirst";

export default curry(function remove(k, obj) {
  return goFirst({}, res => (delete Object.assign(res, obj)[k], res));
});