import curry from '../base/curry';
import goFirst from '../base/goFirst';

export default curry(function *filterL(f, iter) {
    for (const a of iter) if(goFirst(a, f)) yield a;
});