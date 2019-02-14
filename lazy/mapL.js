import curry from '../base/curry';
import goFirst from '../base/goFirst';

export default curry(function *mapL(f, iter) {
    for (const a of iter) yield goFirst(a, f);
});